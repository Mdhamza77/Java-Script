//  
const pets = ['cat','piegeon','peacock','dove']
for(pet1 of pets){
    console.log(pet1)
}

// Map() 

function toupper(str){
   return str.toUpperCase();
}
 const car = ['Volkswagen','Hyundai','Audi','Range Rover']
 car.push('BMW')
 const uppercar = car.map(toupper)
 console.log(uppercar)

 // filter()

 function filt(string){
     return string.startsWith('H') && string.endsWith('i')
 }

const cars = ['Volkswagen','Hyundai','Audi','Range Rover']
const fil = cars.filter(filt)
console.log(fil)
console.log(cars)

/* Without using break 

const contact = ['Ath : 1234567890','Zub: 0987654321','Dan :1234509876','Haza :098766662']
const p = document.querySelector('p')
const inp = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    const search =  inp.value.toLowerCase();
    inp.value = ''
    inp.focus();
    p.textContent = ''
    for(const con of contact){
        const splitcon = con.split(':')
        if(splitcon[0].toLowerCase() === search){
            p.textContent = `${splitcon[0]}'s number is ${splitcon[1]}`;
            break;
        }
    }
    if(p.textContent === ''){
        p.textContent = 'contact not found'
    }
})
*/

// While loop 

const pet = ['cat','peacock','dove']
let myfavouritepets = 'My pets are called '
let i = 0 
while(i<pet.length){
    if(i === pet.length-1){
          myfavouritepets  += ` ${pet[i]} `
    }
    else{
        myfavouritepets += ` ${pet[i]} `
    }
    i++
}

console.log(myfavouritepets)