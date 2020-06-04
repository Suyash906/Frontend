let child1 ={name:"Leo"};
let child2={...child1, age:10};
let child3={...child2, age:20};

console.log(child1);
// { name: 'Leo' }
console.log(child2);
// { name: 'Leo', age: 10 }
console.log(child3)
// { name: 'Leo', age: 20 }