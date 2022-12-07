const pass = document.querySelector('input[type="password"]')
pass.addEventListener('focus',(event)=>{
    event.target.style.background = "Green"
})

// The blur event fires when an element has lost focus. The event does not bubble, but the related focusout event that follows does bubble.
pass.addEventListener('blur',(event)=>{
    event.target.style.textcolor = ''
})

/*
 <form id="form">
    <label for="User">Username</label>
    <input type="text" id="User" name="User">
    <label for="password">Password</label>
    <input type="password" id="password" name="password">

    <button type="button">Click</button>
</form> 
*/