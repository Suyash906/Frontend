class Student{
    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    printName(){
        console.log(`Student name is ${this.name}`);
    }
}

Student.prototype.printName_2=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

let student =new Student("Suyash", 2);
console.log(student); // Student { name: 'Suyash', year: 2 }

student.printName_2() // Name of the Student is Suyash