/**
 * returns the sum of all the student ids.
 *
 * @param {Array} arr list of students
 */
export default function getStudentsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.reduce((accumulator, currentVal) => accumulator + currentVal.id, 0);
}
