function someFunctionVar(){
    if(true){
        var something = "something";
    }
    console.log(something);
}

someFunctionVar();
// something

function someFunctionLet(){
    if(true){
        let something="something";
    }

    console.log(something);
}

someFunctionLet();
// ReferenceError: something is not defined

const temp =10;
temp =100;
// TypeError: Assignment to constant variable.
console.log(temp)

const obj={};
obj.name="suyash"
console.log(obj)
// { name: 'suyash' }

const arr =[];
arr.push(10);
console.log(arr)
// [ 10 ]