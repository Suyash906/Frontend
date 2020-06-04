function Student(name, year){
    this.name=name;
    this.year=year;
}

Student.prototype.printName=function(){
    console.log(`Name of the Student is ${this.name}`);
    this.newProps="A new property";
}

let student1 =new Student("Suyash",2);
console.log(student1);
student1.printName();