
const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); 

function foo(n) {
  const f = () => arguments[0] + n;
  return f();
}

console.log(foo(10));