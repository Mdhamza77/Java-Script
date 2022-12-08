// Empty object
const va = {}
console.log(typeof va)

// Creating an Object 
// 1. Members of object are Stored in name/value pair
//2. data of members are called Properties and functions are called Methods()
const data = {
    name : ['Muhammed','Hamza'] ,  // object to object notation
    age  : '18',
    Religion : 'Islam',
    bio : function() {
        console.log(`$The name is ${this.name[0]+' '+ this.name[1]} and age is around ${this.age} and he Practices ${this.Religion}`)   
    }
}
console.log(data.name[0] +' ' + data.name[1])
console.log(data.bio()) // dot notation
console.log(data["age"] = 33)  // setting object Members
data.bio()

// Bracket Notation 

const obj = {
    name : ['Ryan Gosling','Chris Evan', 'Robert Downney Jr'],
    genre : ['action','Movie Stars']
}
 function bracketnit(obj1){
         console.log(obj[obj1])    
 }
 console.log(bracketnit("name"))
 console.log(bracketnit("genre"))
 

 // Constructor  

 const lib = {
    name : "Alexander Fernandez",
    bi : function(){
        console.log(`${this.name}`)
    }
 }
 function Constructor(nam){
            this.nam  = nam
            this.bi = function(){
                console.log(`This is inside a function ${this.nam}`)
            }
 }
// To call Person() as a constructor, we use new:
 const Aryabhatta = new Constructor("Aryabhatta")
 Aryabhatta.bi()

const Ali = new Constructor("Ali")
Ali.bi()