function Student(name, year){
    this.name=name;
    this.year=year;
}

Student.prototype.printName=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

function TA(name, year, salary){
    Student.call(this,name, year);
    this.salary=salary;
}

let ta=new TA("Pallavi", 2,10);

console.log(ta); // TA { name: 'Pallavi', year: 2, salary: 10 }
TA.printName(); // TypeError: TA.printName is not a function