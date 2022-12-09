// Simple Fuction Expressions 
// 1.The function name. Can be omitted, in which case the function is anonymous. The name is only local to the function body.
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));

// Anonymous Function 

const anony = function (root) {
  return root * root * root
}
console.log(anony(21))

// Hoisting Function 

console.log(notHoisted); // undefined
var notHoisted = function () {
  console.log('bar');
};

// IIfe() - Immediately Invoked Funct Exp
(function () {
  console.log('Code runs!');
})()


