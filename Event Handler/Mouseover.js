const clickeve = document.querySelector('#mouse')
clickeve.addEventListener('mouseover',(event)=>{
    event.target.style.color = 'blue'
    setTimeout(() => {
        event.target.style.color = ''
    }, 500);
},false)

clickeve.addEventListener('mouseenter',(event)=>{
    event.target.style.color = 'violet'
    setTimeout(() => {
        event.target.style.color = ''
    }, 500);
},false)
