//@ts-check

/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

function palindrome(str) {  
  const cleanedStr = str.toLowerCase().replace( new RegExp('[^a-z0-9]', 'g'), '');
  const len = cleanedStr.length;
  for (let i=0; i < len  / 2; i++){
    if ( cleanedStr[i] !== cleanedStr[len - i - 1] ) {
      return false;
    }
  }
  return true;
}

exports.palindrome = palindrome;
