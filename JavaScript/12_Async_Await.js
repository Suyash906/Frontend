const students =[
    {name: "Suyash", year :2},
    {name: "Sam", year:2}
]

function getStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function createStudent(callback){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            students.push({name:"new name", year:1})
            const err = false;
    
            if(!err){
                resolve();
            }else{
                reject('Something went wrong');
            }
    
        },5000);
    }); 
}


async function test(){
    await createStudent();

    getStudents();
}


test();

// Output :-
// [ { name: 'Suyash', year: 2 },
//   { name: 'Sam', year: 2 },
//   { name: 'new name', year: 1 } ]