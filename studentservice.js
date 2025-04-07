const students = require('./studb')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regno==id)
}

function getByGender(gender){
    return students.filter((student)=>student.gender==gender)
}

module.exports={getStudent,getstudents,getByGender}