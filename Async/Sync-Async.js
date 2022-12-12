// Synchronous Program  

//  synchronous function because the caller has to wait for the function to finish its work 
//  and return a value before the caller can continue.



function name(nam) {
        return `This is the name of Function ${nam}`
}

name("jamal")  

//pyramid or Nested Call Back Function - used for Asynchronous programming  

function call(num,cb){
      const res = num + ' 456789321'
      cb(res)

}
function call1(num,cb){
    const res = num + ' 54637892'
    cb(res) ;
}

function opr(){
    call('+91',(result1)=>{
        call1('+98',(result2)=>{
            console.log(`${result2}`)
        })
       console.log(`${result1}`)
    })
}
opr()



