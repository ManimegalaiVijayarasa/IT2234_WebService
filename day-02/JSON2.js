// Define 10 student JSON objects and store them in an array
const students = [
    { id: 1, name: "Mani", gender: "Female", course: "IT", GPA: 3.8 },
    { id: 2, name: "Rajeev", gender: "Male", course: "Business", GPA: 3.2 },
    { id: 3, name: "Sathurshan", gender: "Male", course: "IT", GPA: 3.5 },
    { id: 4, name: "Bavaruba", gender: "Female", course: "IT", GPA: 3.9 },
    { id: 5, name: "Thenu", gender: "Female", course: "Math", GPA: 3.6 },
    { id: 6, name: "Akshayan", gender: "Male", course: "IT", GPA: 3.1 },
    { id: 7, name: "Niru", gender: "Female", course: "Science", GPA: 3.7 },
    { id: 8, name: "Kabil", gender: "Male", course: "IT", GPA: 3.3 },
    { id: 9, name: "Aaraby", gender: "Female", course: "Business", GPA: 3.4 },
    { id: 10, name: "Lathurshigan", gender: "Male", course: "Math", GPA: 3.0 }
];

// Find female students
const femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

// Find students who are following IT course
const itStudents = students.filter(student => student.course === "IT");
console.log("Students in IT Course:", itStudents);

// Find the max GPA
const maxGPA = Math.max(...students.map(student => student.GPA));
console.log("Max GPA:", maxGPA);

// Find the average GPA
const averageGPA = students.reduce((sum, student) => sum + student.GPA, 0) / students.length;
console.log("Average GPA:", averageGPA.toFixed(2));
