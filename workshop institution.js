let approvedStudents = 0; //initializes a counter variable approved Students to 0 and an empty array students.
let students = [];

while (approvedStudents < 25) { //It then starts a while loop, which will continue to execute until 25 students have been approved.
    let studentName = Prompt("Add the student's full name:");
    let studentAge = Number(Prompt("Add age to student date:"));
    if (studentAge >= 18) { //the user to enter the name and age of a student..
        students.push({ name: studentName, age: studentAge });
        approvedStudents++;
    }
}
console.log(students);
// loop finishes executing, the students array contains information for all students who were approved and are of legal age.


