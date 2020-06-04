let address ={
    street: "Ryland Street",
    city: "San Jose",
    state: "California"
}

const {city, state} = address;
console.log(`My city is ${city}`);
// My city is San Jose

let arr = ["aa","bb","cc"];
let [ first ] = arr;
console.log(first);
// aa