//@ts-check

/*
You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
  //return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n))
  const copy2 = arr2.slice();
  for(let i=0; i < arr1.length; i++){
    copy2.splice(n+i, 0, arr1[i]);
  }
  // copy2.splice(n, 0, ...arr1);
  return copy2;
}

exports.frankenSplice = frankenSplice;
