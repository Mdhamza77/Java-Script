// Invoking Functions 
// declaration of func 
function dec() {
    console.log('Welcome to invoke Functions')
}
dec() // calls the function

// default parameter  

function hello(name='Ryan Gosling'){
    console.log(`Hello ${name}`)
}
hello('Ana d armas')
hello()

//  Anonymous Funtion and arrow function()

var anony = function(parameter) {
    console.log("This is Anonymous function" , parameter)
}

anony("Parameterized")

// Arrow function() 

const org = [2,4,6,8]
const mod = org.map((item)=> item * 4 )
console.log(mod)

// Return type function 

function ret(a,b){
    res = a+b
    return res;
}

let x = 20 
let y = 40
console.log(ret(x,y))

// function expression 



(function(x,y){
    const z = x * y
    return
})(2,4);

