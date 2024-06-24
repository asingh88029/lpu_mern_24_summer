const student = {
    name : "Ankit",
    package : 24,
    job_location : "Bengaluru"
}


const student1 = JSON.parse(JSON.stringify(student))

console.log(student, "student")

console.log(student1, "student1")

student1.package = 28

console.log(student, "student")

console.log(student1, "student1")