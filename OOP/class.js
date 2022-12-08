class person {
    name ;
    constructor(name){
        this.name = name
    }
    def(){
        console.log(`This Person details ${this.name}`)
    }
}



// Inheritance
class student extends person {
        teaches ; 
        #year ;
        constructor(name,teaches,year) {
            super(name);
            this.teaches = teaches
            this.#year = year
            
        }
        deff(){
            console.log(`This following student ${this.name} studies  ${this.teaches} in extra classes`)
        }
        age(){
            return this.#year > 1;     
           }
        
}

const hamza = new student('Hamza','biology',6)
hamza.def()
hamza.deff()
hamza.age()