

// Adding an Image 
const myImage = document.querySelector("img")
 myImage.onclick = () => {
    const mysrc = myImage.getAttribute("src")
    if(mysrc=="Images/pexels-aleksandar-pasaric-2115367.jpg")
  {
    myImage.setAttribute("src","Images/istockphoto-532237983-612x612.jpg")
  }
  else{
    
    myImage.setAttribute("src","Images/pexels-aleksandar-pasaric-2115367.jpg")
  }   
 }
 

 //
 const button = document.querySelector("button")
 const heading = document.querySelector("h2")

 function User() {
    const name = prompt("Enter user name")
    if(!name){
        User()
    }
    else{
    localStorage.setItem("name",name)
    heading.textContent = "This is User name handling event " + name
}
 }

 button.onclick = () => {
    User()
 }