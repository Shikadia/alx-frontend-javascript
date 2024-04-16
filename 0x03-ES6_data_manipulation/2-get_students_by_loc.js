const getStudentsByLocation = (list, city) => {
  const studentLoc = list.filter((x) => x.location === city);
  return studentLoc;
};

export default getStudentsByLocation;
