function f(x) { return x/2;}
function g(x) { return (1 + 3*x) / 2; }
function c(x) { return [f, g][x % 2](x); }
function finv(x) { return 2*x; }
function ginv(x) { return (2*x - 1) / 3; }
function cinv(x) { 
  return [finv, finv, ginv][x % 3](x); 
}
function af([a, b]) { return [a/2, b/2]; }
function ag([a, b]) { return [c(a), 3*b/2]; }
function afinv([a, b]) { return [2*a, 2*b]; }
function aginv([a, b]) { return [cinv(a), 2*b/3]; }
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

console.table(
  range(20).map(
    i => 
      (x => 
        (a =>
          ({
            "36n+8": x, 
            "%3": ginv(ginv(x)) % 3,
            "α": a,
            "ω": minevenorder(a),
            fix: maxfixpoint(a)
          })
        )(minoddorder(x))
      )(36*i+8)
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
