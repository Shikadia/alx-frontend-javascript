const getStudentIdsSum = (students) => {
  if (Array.isArray(students)) {
    return students.reduce((sum, x) => sum + x.id, 0);
  }
  return 0;
};

export default getStudentIdsSum;
