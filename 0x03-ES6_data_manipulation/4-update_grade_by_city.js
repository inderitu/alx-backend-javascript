/**
 * returns an array of students for a specific city with their new grade
 *
 * @param {Array} arr -list of students
 * @param {string} city - location in arr
 * @param {Array} newGrades -list of new student grades
 */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  let rtnArr = [];

  if (!Array.isArray(arr)) return [];
  if (!Array.isArray(newGrades)) return [];

  rtnArr = arr.filter((element) => element.location === city);

  rtnArr = rtnArr.map((el) => {
    for (const x of newGrades) {
      if (el.id === x.studentId) {
        return {
          id: el.id,
          firstName: el.firstName,
          location: el.location,
          grade: x.grade,
        };
      }
    }
    return {
      id: el.id,
      firstName: el.firstName,
      location: el.location,
      grade: 'N/A',
    };
  });

  return rtnArr;
}
