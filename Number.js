// is Finite 
 var num = 1
 var n = num / 0 
 console.log(isFinite(n))

 // syntax : Number.isFinite(value)

 // Is Integer()

 function integer(x){
    if(Number.isInteger(x)){
        return 'is an integer'
    }
    else {
        return 'Not an Integer'
    }
}

console.log(integer(111));


