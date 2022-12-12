
//  No Parameter  
let c = () => console.log( a + b *10 );
const a= 66 
const b = 55
c()

// Block body Arroe Functions
const func2 = (x, y) => {
  return x + y;
}

func2(33,66)

// Returning Object Literal Using Arrow Function 

const func = () => ({ foo: 1 });
func()

//No Binding Of Arguments.

const args = ['1','Hamza','2','Muhammed']
const arr = () => args[0] + args[1]
arr()

