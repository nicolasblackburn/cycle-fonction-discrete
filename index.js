function demiGroupeCollatz(...fns) {
  fns.entries().reduce();
  return new Proxy(function () {}, {
    get(target, prop, receiver) {
      console.log(prop);
    },
    apply(target, thisArg, argList) {
    }
  });
}
function g(x) { return x/2;}
function h(x) { return (1 + 3*x) / 2; }
function c(x) { return [g, h][(x % 2 + 2) % 2](x); }
function gi(x) { return 2*x; }
function hi(x) { return (2*x - 1) / 3; }
function ci(x) { 
  return [gi, gi, hi][x % 3](x); 
}
/*
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
*/
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
/**
 * Return an array containing gcd in index 0,
 * and linear combination of a and b in index 1
 * and 2.
 */
function euclide(a, b) {
  if (b > a) {
    const [r, r1, r0] = euclide(b, a);
    return [r, r0, r1];
  }
  let r0 = a;
  let r1 = b;
  let q = Math.floor(r0 / r1);
  let r2 = r0 - q * r1;
  let v0 = [1, 0];
  let v1 = [0, 1];
  let v2 = [v0[0] - q * v1[0], v0[1] - q * v1[1]];
  while (r2 > 0) {
    r0 = r1;
    r1 = r2;
    q = Math.floor(r0 / r1);
    r2 = r0 - q * r1;
    v0 = v1;
    v1 = v2;
    v2 = [v0[0] - q * v1[0], v0[1] - q * v1[1]];
  }
  return [r1, ...v1];
}
/**
 * Return all combinations of k
 * elements choosen within s.
 */
function choosek(s, k) {
  // console.log("choosek", s, k);
  if (k > s.length) {
    return [];
  } else if (k === 0) {
    return [[]];
  } else {
    const r = [];
    for (let i = 0; i < s.length; i++) {
      const x = s[i];
      const rest = [...s.slice(i+1)];
      choosek(rest, k - 1).forEach(s => {
        r.push([x, ...s]);
      });
    }
    // console.log(r);
    return r;
  }
}
function table(rs) {
  let lines = rs.map(r => r.values?.() ?? Object.values(r));
  lines.unshift(rs[0].keys?.() ?? Object.keys(rs[0]));
  const colwidths = lines[0].map(_ => 0); 
  for (const line of lines) {
    for (let i = 0; i < line.length; i++) {
      colwidths[i] = Math.max(colwidths[i] ?? 0, line[i].toString().length);
    }
  }
  lines = lines.map(line =>
    line.map((entry, i) => entry.toString().padEnd(colwidths[i])));
  let out = "";
  out += "┌─" + lines[0].map((_, i) => "".padEnd(colwidths[i], "─")).join("─┬─") + "─┐\n";
  out += "│ " + lines[0].join(" │ ") + " │" + "\n";
  out += "├─" + lines[0].map((_, i) => "".padEnd(colwidths[i], "─")).join("─┼─") + "─┤\n";
  out += lines.slice(1)
    .map(row => "│ " + row.join(" │ ") + " │")
    .join("\n");
  out += "\n└─" + lines[0].map((_, i) => "".padEnd(colwidths[i], "─")).join("─┴─") + "─┘";
  console.log(out);
}
function mod(a, m) {
  let b = a % m;
  return b < 0 ? b + m : b;
}

table(
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

table(
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

table(
  range(10).map(x => x + 1).map(omega => {
    const n = Math.ceil(omega * Math.log(3) / Math.log(2));
    const epsilon = n - omega;
    return {
      "ω": omega,
      "ε": epsilon,
      "min": qtostr(rational(3**omega - 2**omega, 2**n - 3**omega)),
      "max": qtostr(rational(2**epsilon * (3**omega - 2**omega), 2**n - 3**omega))
    };
  })
)

range(7).forEach(x => {
  const omega = x + 2;
  const n = Math.ceil(omega * Math.log(3) / Math.log(2));
  const epsilon = n - omega;
  const a = 3**omega;
  const b = 2**n;
  let [gcd, u, v] = euclide(a, b); 
  /*table([{
    "ω": omega,
    "ε": epsilon,
    "min": qtostr(rational(3**omega - 2**omega, 2**n - 3**omega)),
    "max": qtostr(rational(2**epsilon * (3**omega - 2**omega), 2**n - 3**omega)),
    u,
    v,
    [`3^${omega}`]: a,
    [`2^${n}`]: b, 
  }]);*/
  table(choosek(range(n - 3), omega - 2).map(s => {
    s = [0, 1, ...s.map(x => x + 2)];
    let f = range(n).map(_ => "g");
    for (const i of s) {
      f[i] = "h";
    }
    const k = s.map((a, i) => 2**(n-a-1)*3**i).reduce((a, b) => a+b, 0);
    return {
      //s,
      f: f.join(""),
      //S_f: k,
      [`mod 2^${n}`]: mod(k*-u, b),
      [`mod 3^${omega}`]: mod(k*v, a),
      //"Diff": mod(k*-u, b) - mod(k*v, a),
      //[`mod X`]: mod(k*(b*v**2 - a*u**2), a*b),
      //Fix_f: qtostr(rational(k, b - a)),
    };
  }));
  // x doit être dans 18n+8 et dans les ensemble D_f et D_fi
})

(() => {
  const g = x => x/2;
  const h = x => (3*x-1)/2;
  const f = [g,g,g,h,h,h,g,h,h,h,h];
  const n = f.length;
  const m = f.filter(x => x === h).length; 
  let s = 0;
  let i = 0;
  let j = n - 1;
  while (j >= 0 && i < m) {
    if (f[n - j - 1] === h) {
      s += 2**j*3**i;
      i++;
    }
    j--;
  }
  const a = 3**m;
  const b = 2**n;
  let [gcd, na, nb] = euclide(a, b);
  const p = mod(s*na, b);
  const q = mod(s*-nb, a);
  const r = mod(s*(a*na**2 - b*nb**2), a*b);
  const t0 = -(-a*na*na + b*nb*nb);
  const t1 = -(a*na*Math.abs(na) + b*nb*nb);
  const t2 = -(a*na*Math.abs(na) + b*nb*(nb - Math.abs(na)) + b*nb*Math.abs(na));
  const t3 = -((a*na + b*nb)*Math.abs(na) + b*nb*(nb - Math.abs(na)));
  const t4 = -(Math.abs(na) + b*nb*(nb - Math.abs(na)));
  const t5 = -Math.abs(na) + b*nb*Math.abs(na) - b*nb*nb;
  const t6 = mod(s*(-Math.abs(na) + b*nb*Math.abs(na) - b*nb*nb), b);
  table([{s, a, na, b, nb, p, q, r}]);
  table([{"...": "...", t4, t5, t6}]);
})()

(() => {
  const s = 211;
  const a = 3**5;
  const b = 2**8;
  let [gcd, na, nb] = euclide(a, b);
  //if (inva < 0) {
  //  inva += a;
  //}
  //if (invb < 0) {
  //  invb += b;
  //}
  const p = mod(s*-na, b);
  const q = mod(s*nb, a);
  const r = mod(s*(b*nb**2 - a*na**2), a*b);
  console.log(p,q,r);
})()

/*
f(x) = ax + b
fix_f = b / (1 - a)

f(x) = ax + b
f'(x) = ax / 2 + b
fix_f = p / q
fix_f' = 2b / (2 - a)
b = p
a = 1 - q
fix_f' = 2p / (1 + q) 
*/


Fix_f(x) = S(f) / (2**(n) - 3**(m))

r0 = a;
r1 = b;
r2 = r0 - q0 * r1;
r3 = r1 - q1 * r2;
...
  r[n] = r[n-2] - q[n-2] * r[n-1];

q[n] = floor(r[n+1] / r[n]);

q(0) = 1;
s(0) = [0, q];
v(0) = [a, b];
q(n) = ceil(v(n-1)[0] / v(n-1)[1])
s(n) = [];
v(n) = [v(n-1)[1], v(n-1)[0] % v(n-1)[1]]

r1 - q1 * (r0 - q0 * r1) = r3
r1 + q0 * q1 * r1 - q1 * r0 = r3
(-q1) * r0 + (1 + q0 * q1) * r1 = r3

...
rn - qn * r(n+1) = 1

gh = 3*x/4 + 1/4
3*x = -1 mod 4
x = -3 mod 4
x = 1 mod 4


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
