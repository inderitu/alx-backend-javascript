export default function getListStudentIds(arr) {
  const rtnArr = [];

  if (!Array.isArray(arr)) {
    return [];
  }

  arr.map((element) => rtnArr.push(element.id));

  return rtnArr;
}
