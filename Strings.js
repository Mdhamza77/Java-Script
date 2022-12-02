const alphabet = "Welcome to String types"
console.log(typeof alphabet)
console.log(alphabet)

var text = "This is a captioned text represent's the following difference "
var sq = 'among "Single quote" and "double quote"'
var s = 'i\'ve got to go far away from here'
console.log(text + sq)
console.log(s)

const va = "Welcome"
const greet = `${va}  to aspire Systems`
console.log(greet)

 /* String Concatenation 

 const str = document.querySelector("button")
 function myfun(){
    const va = prompt("Enter the First name");
    alert(`Hello '${va}' welcome to String concatenation`) 
 }

//str.addEventListener("click",myfun)
str.onclick = ()=>{
    myfun()
}

*/

// Numbers vs Strings 

const num = 786
const luck = "Muhammed"
console.log(typeof`${luck}${num}`)

// Concatenation using " +  " and Conversions

var a = "Muhammed"
var b = "Hamza"
var c = 123
console.log(a +" "+ b)
//console.log(Number(c))
console.log(typeof c.toString())

// Expression in Strings  and Multiline Strings - `Template literal`

const song = "Song of ICE and FIRE"
const rating = 8 ;
const highrating = 10 ;
console.log(`I liked the Music from GOT named ${song} 
and  i would like to rate it ${(rating/highrating)*100}%`)
// new line 
const output = "I like the song.\nI gave it a score of 90%.";
console.log("length of output" + output.length)
console.log(output);

// Character access
console.log("Mice".charAt(3))
console.log("Cat"[1])

// String Comparison 

const a1 = 'a'
const b1 = 'b'
if(a>b){
    console.log(`${a1} is greater than ${b1}`)
} 
else if(b>a){
    console.log(`${b1} is greater than ${a1}`)
}
else{
    console.log(`${a1} and ${b1} are Equal`)
}

// Primitive String and String Object

const strprem1 = "primitive"
const strprem2 = String(11)
const strprem3 = String(true)
const strobj  = new String("Welcome to str Objects")

console.log(typeof strprem1)
console.log(typeof strprem2)
console.log(typeof strprem3)
console.log(typeof strobj)