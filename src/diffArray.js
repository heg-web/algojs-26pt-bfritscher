//@ts-check

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note:
You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {

  const res = [];

  function elNotInArr2(a1, a2) {
    for(let el of a1) {
      if ( !a2.includes(el)) {
        res.push(el);
      }
    }
  }

  elNotInArr2(arr1, arr2);
  elNotInArr2(arr2, arr1);

  return res;
  /*
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  return [...s1.symmetricDifference(s2).values()];
  */
}

exports.diffArray = diffArray;
