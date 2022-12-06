//dblclick fires after two click events (and by extension, after two pairs of mousedown and mouseup events).

const dbclick = document.querySelector('aside')

dbclick.addEventListener('dblclick', (e)=>{
    dbclick.classList.toggle('large')
})