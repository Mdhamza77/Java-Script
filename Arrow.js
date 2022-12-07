
const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); 

function foo(n) {
  const f = () => arguments[0] + n;
  return f();
}

console.log(foo(10));


// Arrow using function expressions
const org = [2,4,6,8]
const mod = org.map((item)=> item * 4 )
console.log(mod)
//
const dict = ['js' , 'Es6' , 'Rjs']

const key = dict.map((e)=>
   e.length)

console.log(key)