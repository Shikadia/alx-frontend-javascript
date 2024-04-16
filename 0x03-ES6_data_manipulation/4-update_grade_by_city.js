export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  const newStudents = students.map((student) => {
    const buffer = student;
    const matched = newGrades.find((grade) => grade.studentId === student.id);
    if (matched) {
      buffer.grade = matched.grade;
    } else {
      buffer.grade = 'N/A';
    }
    return buffer;
  });
  return newStudents;
}
