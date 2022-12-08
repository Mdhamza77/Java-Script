// Refrence error :  Non Hoissting
const x = 1 
{
    console.log(x)
    const x = 4
}

// Hoisting , var block is not scoped variable 
{
    var k = 22
}
console.log(k)

