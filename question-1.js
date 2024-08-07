function f(x) {
  x = "X-" + x;
  return function (y) {
    y = "Y-" + x;
    return function (z) {
      return "Z-" + y;
    };
  };
}
let g = f("a")("b")("c");
console.log(g);
