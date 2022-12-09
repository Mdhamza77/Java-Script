const pro = {
    city : 'Chennai',
    greet(){
        console.log(`Welcome to ${this.city}`)
    }
}
console.log(pro.city)
pro.greet()

// To Find the prototypes 

const lib = {
    name : "Alexander Fernandez",
    bi : function(){
        console.log(`${this.name}`)
    }
 }

const my = lib.name
let key =  my
do{
   key = Object.getPrototypeOf(key)
   console.log(key)
}while(key)

// Shadowing properties

const date =new Date(2000,05,19);
console.log(date.getMonth())
date.getMonth = function(){
       console.log("May Month")
}
date.getMonth()

// Setting a proto type 

const person = {
    greet(){
        console.log("Welcome to setting up a prototpe")
    } 
}

const person2 = Object.create(person);
person2.greet()

