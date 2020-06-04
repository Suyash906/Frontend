function student(name){
    console.log("All students names without rest operator",name);
}

function students(...name){
    console.log("All Student names with rest operator", name);
}

student("Alex","Bob");
// All students names without rest operator Alex
students("Alex","Bob");
// All Student names with rest operator [ 'Alex', 'Bob' ]