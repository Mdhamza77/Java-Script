
const x = {xx:"Christian bale"}
let  y = 180

function name() {
    if(x != null){
        x.xx = "Christopher"
    }
    else if(y == 180){
       y = 360
    }
    console.log(x)
    console.log(y)
}

name()

var key = "123"
if(key == "123"){
    key = 223;
    console.log(key)
    console.log("The Key is matched")
}
else {
    console.log("Mismatch")
}

var float = 33.0000233
float++;
console.log(float + 4) 
console.log(typeof float)


// Null Type operators 
// The null value represents the intentional absence of any object value. 
//It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

const va = null ;
console.log(va) 
console.log(typeof null) // it is a bug
