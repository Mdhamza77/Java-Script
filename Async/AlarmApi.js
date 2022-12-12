const nam = document.querySelector('#name')
const del  = document.querySelector('#delay')
const out = document.querySelector('#output')
const btn = document.querySelector('#alarm')



function alarm(){
    setTimeout(()=>{
        out.textContent = "Wake up!"
    },1000)
}

btn.addEventListener('click',alarm)
// Alarrm promise Constructor  

function al(person,delay) {
    return new Promise((resolve,reject)=>{
        if(delay<0){
            throw new Error('Alarm Value not be negative')
        }
        setTimeout(()=>{
                 resolve(`wake up ${person}`)
        }
    ,delay)
    })
}

btn.addEventListener('click',() => {
     al(nam.value,del.value)
      .then((msg)=> out.textContent = msg)
     .catch((error)=> out.textContent = `Could not set Alarm ${error}`)
})


// Async Func and await Key 

btn.addEventListener('click',async ()=>{
    const x = await  al(nam.value,del.value)
    .then((msg)=> out.textContent = msg)
   .catch((error)=> out.textContent = `Could not set Alarm ${error}`)
})

