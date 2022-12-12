
/* fetch Api Promise.
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

*/
// Chaining  Promises

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response)=> {
       if(!response.ok){
        throw new Error(`Http error ${response.status}`)
}
  return response.json()
})
.then((data)=>{
    for (i of data){
    console.log(i)
    console.log(i.name) 
 }
})


//  Chaining Promise .

let x = new Promise (function s(res, req){
    res("Response Promise")
    
})

x.then(function d(result){
    console.log(result)
})

.then(function d1(req){
    
    console.log("Multiple Chaining promise")
})