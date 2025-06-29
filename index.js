function ng(x) { return x/2;}
function nh(x) { return (1 + 3*x) / 2; }
function nc(x) { return [ng, nh][x % 2](x); }
function nginv(x) { return 2*x; }
function nhinv(x) { return (2*x - 1) / 3; }
function ncinv(x) { 
  return [nginv, nginv, nhinv][x % 3](x); 
}
function g([a, b]) { return [qmult(a, rational(1, 2)), qmult(b, rational(1, 2))]; }
function h([a, b]) { return [qadd(rational(1, 2), qmult(a, rational(3, 2))), qmult(b, rational(3, 2))]; }
function tostr([a, [bn, bd]]) {
  const aa = qtostr(a);
  if (aa === "0" && bn === 0) {
    return "0";
  } else {
    return (aa !== "0" ? aa + " + " : "") + (bn === 0 ? "0" : bn === bd ? "x" : bn === 1 ? "x/" + bd : bn + "x/" + bd); 
  }
}
function fix([a, b]) {
  return qdiv(a, qsub(rational(1), b));
}
function cg(x) {
  return [0, 1, ...x.map(x => x + 1)];
}
function ch(x) {
  return x.map((x, i) => i % 2 ? x + 1 : x);
}
function creduce(x) {
  const v = [[0, 1], [0, 1]];
  for (let i = 0; i + 1 < x.length; i += 2) {
    const a = x[i];
    const b = x[i + 1];
    if (i < x.length - 2) {
      v[0] = qadd(v[0], [3**a, 2**b]);
    } else {
      v[1] 
    }
  }
}
function ctostr2(x) {
  let s = '';
  for (let i = 0; i + 1 < x.length; i += 2) {
    const a = x[i];
    const b = x[i + 1];
    s += (s.length ? ' + ' : '') + `${a === 0 && b === 0 ? '1' : (a === 0 ? '1' : a === 1 ? '3' : '3' + exponentnumber(a)) + '/' + (b === 0 ? '1' : b === 1 ? '2' : '2' + exponentnumber(b))}`;
    if (i + 1 === x.length - 1) {
      s += ' x';
    }
  }
  return s;
}
function exponentnumber(n) {
  return [...(n).toString()].map(d => ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'][parseInt(d)]).join('');
}
//function vg([a, b]) { return [a/2, b/2]; }
//function vh([a, b]) { return [nc(a), 3*b/2]; }
//function vginv([a, b]) { return [2*a, 2*b]; }
//function vhinv([a, b]) { return [ncinv(a), 2*b/3]; }
function compose(...fs) {
  return x => fs
    .reverse()
    .reduce((y, f) => f(y), x);
}
function range(n) { 
  return [...new Array(n).fill().keys()]; 
}
function minevenorder(a) { 
  return Math.ceil(
    a*(Math.log(3)/Math.log(2) - 1)
  );
}
function minoddorder(x) {
  let a = 1;
  while (maxfixpoint(a) < x) {
    a++;
  }
  return a;
}
function maxfixpoint(a, b = minevenorder(a)) {
  return (1 - (3/2)**a) 
    / (1 - 3/2)
    / 2
    / (1 - (3/2)**a/2**b);
}
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
function rational(n, d = 1) {
  const r = [n, d];
  const e = gcd(r[0], r[1]);
  return [r[0] / e, r[1] / e];
}
function qadd([a, b], [c, d]) {
  const r = [a*d + b*c, b*d];
  const e = gcd(r[0], r[1]);
  return [r[0] / e, r[1] / e];
}
function qsub([a, b], [c, d]) {
  const r = [a*d - b*c, b*d];
  const e = gcd(...r);
  return [r[0] / e, r[1] / e];
}
function qmult([a, b], [c, d]) {
  const r = [a*c, b*d];
  const e = gcd(...r);
  return [r[0] / e, r[1] / e];
}
function qdiv([a, b], [c, d]) {
  const r = [a*d, b*c];
  const e = gcd(...r);
  return [r[0] / e, r[1] / e];
}
function qtostr([a, b]) {
  if (a === 0) {
    return "0";
  } else if (a === b) {
    return "1";
  } else {
    return `${a}/${b}`;
  }
}

console.table(
  range(20).map(
    i => 
    (x => 
      (a =>
        ({
          "36n+8": x, 
          "%3": nginv(nginv(x)) % 3,
          "α": a,
          "ω": minevenorder(a),
          fix: maxfixpoint(a)
        })
      )(minoddorder(x))
    )(36*i+8)
  )
)

console.table(
  range(20).map(
    omega => {
      const alpha = minevenorder(omega); 
      return {
        "ω": omega,
        "α": alpha,
        "n": omega + alpha
      };
    }
  )
)

/**
 * 2**n*x + a
 * x, x+1, x+2, 2*x, 2*x+1, 2*x+2
 * 2, 1,   0,   1,   2,     0
 *
 * odds x:
 * - that are not multiples of 3
 * - not attached to a number > 36n+8
 * - greater than 2
 *
 * 1/2 + 3/2x > 36n+8
 * 1/2 + 3/4 + 9/4x > 36n+8
 * ...
 * sum(0, a-1, i => (3/2)**i)/2 + (3/2)**a x 
 * > 36n+8 , where a = (36n+8)/2
 *
 * -1/3 -2/9 +4x/9
 *
 * (f**-1)**n(x) = -sum(0, n-1, i=>(1-(2/3)**i)/3
 * + (2/3)**n x
 *
 * 1+(x-1)(3/2)**a
 * 1-(x+1)(2/3)**a
 *
 * -x(2/3)**a + 1 - (2/3)**a
 * x+1 = 0 mod 3**a
 *
 * (3**i)N-1 <= (3/2)**i (36n+8 - (1-(2/3)**i)/(1-2/3)/3)
 * pour i allant de 1 à (36n+8)/2
 * 
 * 3n+2
 * 9n+8
 * 27n+26
 * 36n+35
 * 108n+107
 * ...
 *
 * 2x+1
 * 4x+3
 *
 *
 * Suppose que:
 * c(ax+b)+d <= a(cx+d)+b
 *
 * Assume vrai que:
 * c(ex+f)+d <= e(cx+d)+f
 * <=> cf+d <= de+f
 *
 * Alors
 * c(c(ex+f)+d)+d <= c(e(cx+d)+f)+d
 * <=> ccf+cd+d <= cde+cf+d
 * <=> ccf+cd <= cde+cf
 * <=> cf+d <= de+f
 *
 * et
 * c(e(cx+d)+f)+d <= e(c(cx+d)+d)+f
 * <=> cde+cf+d <= cde+de+f
 * <=> cf+d <= de+f
 *
 */
