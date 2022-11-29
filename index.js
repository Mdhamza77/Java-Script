const par = document.querySelector('p')
par.addEventListener('click',func)

function func(){
   const  name = prompt("Enter the User name")
   par  = "User name : ${name} ";  
}