//dblclick fires after two click events (and by extension, after two pairs of mousedown and mouseup events).

const dbclick = document.querySelector('aside')

dbclick.addEventListener('dblclick', (e)=>{
    dbclick.classList.toggle('large')
})

/*
<aside>
      <h3>This double click event</h3>
      <p>double click to see the transition</p>
   </aside>
  
   <style>
   body{
       text-align: center;
   }
   .large {
transform: scale(1.3);
}
</style>
 */