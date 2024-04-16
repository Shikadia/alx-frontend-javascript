const getListStudentIds = (list) => {
  if (Array.isArray(list)) {
      return list.map((x) => x.id);
  }
  
  return [];
};

export default getListStudentIds;
