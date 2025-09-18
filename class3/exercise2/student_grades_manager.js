/*
Given an array of students:
1. Filter out students with passing grades.
2. Sort students by their grades.
3. Calculate the average grade of the class.
4. Find the student with the highest grade.
5. Create a new array containing only student names.
*/

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "David", grade: 90 },
    { name: "Eve", grade: 65 }
];

function getPassingStudents(studentArray) {
    const passingStudents = studentArray.filter(function(student) {
        return student.grade > 70;
    });
    return passingStudents;
}

// console.log(getPassingStudents(students));

function sortStudentsByGrade(studentArray) {
    return studentArray.sort(function(student1, student2) {
        return student2.grade - student1.grade;
    });
}
// console.log(sortStudentsByGrade(students));

function getAverageGrade(studentArray) {
    const totalGrade = studentArray.reduce(function(total, student) {
        return total + student.grade;
    }, 0);
    return totalGrade / studentArray.length;
}

// console.log(getAverageGrade(students));

function getBestStudent(studentArray) {
    const sortedStudents = sortStudentsByGrade(studentArray);
    return sortedStudents[0];
}

console.log(getBestStudent(students));

function getStudentNames(studentArray) {
    return studentArray.map(function(student) {
        return student.name;
    });
}

console.log(getStudentNames(students));