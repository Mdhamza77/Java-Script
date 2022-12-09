// Refrence error :  Non Hoissting
console.log(x)
const x = 1 
{
    console.log(x)
    const x = 4
}

// Hoisting , var block is not scoped variable 


{
     
    console.log(k)
    var k = 22
    
}

// 
console.log(notHoisted); // undefined
// Even though the variable name is hoisted,
// the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log('bar');
};

