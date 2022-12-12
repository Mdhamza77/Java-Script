// The async keyword gives you a simpler way to work with asynchronous promise-based code.
// Adding async at the start of a function makes it an async function:

async function fetchp(){
    try{

    
     const response =  await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
     if(!response.ok){
            throw new Error(`Http error ${response.status}`);
     }
     const data = await response.json();
     console.log(data[0].age)
    }
     catch (error){
        console.log(`couldd not get ${error}`)
     };
}

fetchp()

// Another type to write 
const x = func() 
x.then((data)=>{
    console.log(data[2].image)
})



// 


btn.addEventListener('click',async ()=>{
    const x = await  al(nam.value,del.value)
    .then((msg)=> out.textContent = msg)
   .catch((error)=> out.textContent = `Could not set Alarm ${error}`)
})



