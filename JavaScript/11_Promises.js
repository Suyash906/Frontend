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
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            students.push({name:"new name", year:1})
            const err = false;
    
            if(!err){
                resolve();
            }else{
                reject('Something went wrong');
            }
    
        },500);
    }); 
}

createStudent().then(getStudents());

const promise1 = Promise.resolve();
const promise2 =20;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'done!');
});

Promise.all([promise1, promise2, promise3]).then(values=> console.log(values));


// Output :-
// [ { name: 'Suyash', year: 2 },
//   { name: 'Sam', year: 2 },
//   { name: 'new name', year: 1 } ]
// [ undefined, 20, 'done!' ]