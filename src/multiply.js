//@ts-check

/* Multiply all elements of the provided array */
function multiplyArray(arr) {
  let total = 1;
  for(let el of arr) {
      total *= el;
  }
  return total;
}

/* Multiply all elements in the array of array */
function multiplyAll(arr) {
  let total = 1;
  for(let sunArr of arr) {
    total = total * multiplyArray(sunArr);
  }
  return total;
}

/* Multiply all elements in the given array which can have many sub-arrays*/
function multiplyAllMixed(arr) {
  return;
}

exports.multiplyArray = multiplyArray;
exports.multiplyAll = multiplyAll;
exports.multiplyAllMixed = multiplyAllMixed;
