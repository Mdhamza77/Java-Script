
//On Click Event Arrow Function
document.querySelector("html").addEventListener("click",  ()=> {
    alert("Ouch! Stop poking me!");
  });

  
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