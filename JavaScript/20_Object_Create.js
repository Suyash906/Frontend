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

TA.prototype = Object.create(Student.prototype);

let ta=new TA("Pallavi", 2,10);

console.log(ta);
ta.printName();

/* Output :-

Student { name: 'Pallavi', year: 2, salary: 10 }
Name of the Student is Pallavi

*/