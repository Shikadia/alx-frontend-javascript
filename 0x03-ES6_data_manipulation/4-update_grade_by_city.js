export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  const newStudents = students.map((student) => {
    const matched = newGrades.find((grade) => grade.studentId === student.id);
    if (matched) {
      student.grade = matched.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return newStudents;
}
