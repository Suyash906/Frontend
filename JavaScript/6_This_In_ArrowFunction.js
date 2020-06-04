function Traditional(){
    this.value=10;
    let temp =function(){console.log(`Traditional function value: ${this.value}`);}
       temp();
   }
function Arrow(){
   this.value=10;
   let temp=()=>{console.log(`Arrow function value:${this.value}`);}
   temp();
}

var traditional = new Traditional();
var arrow =new Arrow();

// Output :-    
// Traditional function value: undefined
// Arrow function value:10