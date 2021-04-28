let a = 10,
  b = 3;
// a = 3, b =10
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
