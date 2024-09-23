/* A caesarCipher function thacase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
- Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
- For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.t takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.
- Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
- Don’t forget to test case preservation. The shifted letter
*/

function ceaserCipher(string, num) {
  let caesarCipherString = "";
  let currCharCode = 0;
  let shiftedChar = "";
  const specialChars = /[\s,.!?_-]/g
  if (!string) { return caesarCipherString }

  if (string.length === 1) {
    currCharCode = string.charCodeAt()
    const nextChar = String.fromCharCode(currCharCode + 1);
    return caesarCipherString = nextChar
  } else if (string.length > 1) {
    for (let i = 0; i < string.length; i++) {
      currCharCode = string[i].charCodeAt();
      currChar = string[i];
      if (currChar.match(specialChars)) {
        caesarCipherString += string[i]
      } else if (currCharCode + num >= 122) {
        shiftedChar = String.fromCharCode(currCharCode - (26 - num));
        caesarCipherString += shiftedChar
      } else {
        shiftedChar = String.fromCharCode(currCharCode + num);
        caesarCipherString += shiftedChar
      }
    }
  }
  return caesarCipherString
}

// from [a-z] 97 to 122
// from [A - Z] 65 to 90
//console.log("x".charCodeAt() - (26 - 3)) // 97
//console.log("y".charCodeAt() - (26 - 3)) // 98
//console.log("Z".charCodeAt())
console.log(ceaserCipher("xyz", 3))
console.log(122 - 26)
console.log(120 % 26)
// console.log("testA" + "a".charCodeAt())
// console.log("testZ" + "z".charCodeAt())
// console.log(122 - 97)
// console.log(String.fromCharCode(122 - 25))
// console.log(String.fromCharCode(120))

module.exports = ceaserCipher