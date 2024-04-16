/**
 * Returns an array of objects who are located in a specific city.
 *
 * @param {Array} arr - list of students
 * @param {string} city - city to find in array
 */
export default function getStudentsByLocation(arr, city) {
  let rtnArray = [];

  if (!Array.isArray(arr)) {
    return rtnArray;
  }

  rtnArray = arr.filter((elem) => elem.location === city);

  return rtnArray;
}
