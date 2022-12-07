// Creating an array list 

var fruits = ['Mango','Watermelon','Popaya','Blueberry']
console.log(fruits)

// Various Data types. 

var even = [2,4,6,8,10]
var random = ['Kiwi', 786 , [1,3,5,7,9]]
console.log(even)
console.log(random)

// length of an array 

var fruits = ['Mango','Watermelon','Popaya','Blueberry']
console.log("Length of array list : "+fruits.length)
fruits[2] = 'Muskmelon'
console.log(fruits)
 
// indexof() :

var num = ['1','2','2']
console.log(num.indexOf(2))

//  Adding and Removing items 

var city = ['Manchester','Dubai','Mumbai','Qatar']
city.push('Spain')
city.unshift('Makkah')
console.log(city)
city.pop()
console.log(city)

// splice 

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
cities.splice(index, 2,'wer');
console.log(cities);

// Accessing Every item 

const citi = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
for(cit of citi){
    console.log(cit)
}

