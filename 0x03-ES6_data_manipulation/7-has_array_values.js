/**
 * checks if all elements in a array are in a set
 *
 * @param {Array} arr array of random items
 * @param {Set} checkSet set of random items
 * @returns true if items in array are in set else false
*/
export default function hasValuesFromArray(checkSet, arr) {
  for (const x of arr) {
    if (!checkSet.has(x)) {
      return false;
    }
  }
  return true;
}
