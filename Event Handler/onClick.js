const btn = document.querySelector('button')

function random(num){
    return Math.floor(Math.random() * (num+1))
}

btn.addEventListener('click', ()=>{
    const col = `rgb(${random(200)},${random(200)},${random(200)})`
    document.body.style.backgroundColor = col
})

/* 
 <button type="button">Click</button>
 */