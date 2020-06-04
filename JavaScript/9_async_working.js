const students = [
    {name: "Suyash", year:2},
    {name: "Sam", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(){
    setTimeout(()=>{
        students.push({name:"new name", year:1})
    },5000);
}

createStudent();
getStudents();

// Output :-
// [ { name: 'Suyash', year: 2 }, { name: 'Sam', year: 2 } ]