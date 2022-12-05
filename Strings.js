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

// String MEthods 

// @@Iterators  

const q = "Welcome to Programming languages"

const iterator = q[Symbol.iterator]();
let Char = iterator.next();
// value  The next value in the iteration sequence.
// Done    If value is present alongside done, it is the iterator's return value.

while (!Char.done && Char.value !== ' ') {
  console.log(Char.value);
  Char = iterator.next();
} 

const str = "ABC";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); 
console.log(strIter.next().value); 

// at(): 

let wrd = '12233333 Hamza'
let cnt  = 4
console.log(`The index count of ${wrd} at index of ${cnt} is ${wrd.at(cnt)} `)

//charAt() 
 
let nw = "This is to define String values using CharAt()" 
let cn = 16
console.log(`The index values of String ${nw} is ${nw.charAt(cn)} `)

//concat() :  

var str1 = "Muhammed"
var str2 = "Hamza"
console.log(str1.concat(' ', str2))
console.log("".concat(...str1))
console.log("".concat([]))

// Endswith()

var name = "Muhaimin jamal"
console.log(name.endsWith("jamal"))
console.log(name.endsWith("dl"))

// includes()

var quote = "In the Bleek Mid Winter there is heavy snow fall"
console.log(quote.includes('Mid'))

//indexof() && LastofIndex() : 

var quot = "Take a Break and have health time for ur mental health"
console.log(`The index of ${quot} is at  ${quot.indexOf('health')}`)
console.log(`The last of index of ${quot} is ${quot.lastIndexOf('health')} `)

// Localecompare
var pc1 = "wel"
var pc = "COME"
console.log(pc.localeCompare(pc1)) 

// match() : 

var pass = "Hellooooo"
var regex = /[A-Za-z]/g
console.log(pass.match(regex))

// matchAll() :

var reg = /H(a)(mza(\d{1,9}))/g ;
var name = "Hamza786Hamza876"
var arr = [...name.matchAll(reg)]
console.log(arr[0])

//PadEnd() :
var ex = "500"
console.log(ex.padEnd(4,'$'))

// Pad Start() :
 var cno = '4444455555666'
 var lno = cno.slice(-3);
 var pdno = lno.padStart(cno.length,'*')
 console.log(pdno)

//slice() :

var poem = "Spitting the facts instead"
var slice = poem.slice(13)
console.log(slice)
console.log(poem)

// split() :

var poem = "Spitting the facts instead"
var wrp = poem.split(' ')
console.log(wrp[0])
var cpy = poem.split()
console.log(cpy)
var chr = poem.split('')
console.log(chr[10])

// to String() :  

var strobj1 = new String(1234)
console.log(strobj1)
console.log(strobj1.toString())
