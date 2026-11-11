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
  for(let subArr of arr) {
    total = total * multiplyArray(subArr);
  }
  return total;
}

/* Multiply all elements in the given array which can have many sub-arrays*/
function multiplyAllMixed(arr) {
  let total = 1;
  for(let e of arr) {
    if (Array.isArray(e)) {
      total = total * multiplyAllMixed(e);
    } else if (typeof e === 'number' ) {
      total = total * e;
    }
  }
  return total;
}
exports.multiplyArray = multiplyArray;
exports.multiplyAll = multiplyAll;
exports.multiplyAllMixed = multiplyAllMixed;
