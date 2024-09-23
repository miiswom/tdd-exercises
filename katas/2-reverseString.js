function reverseString(string) {
  let reversed = ""

  if (!string) {
    return reversed
  } else {
    const strToArr = string.split("");
    reversed = strToArr.reverse().join("")
    return reversed
  }

}

module.exports = reverseString