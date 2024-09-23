function capitalize(string) {
  let firstLetter = ""
  if (!string) {
    return firstLetter;
  } else if(string.length === 1){
    firstLetter = string[0]
    return firstLetter.toUpperCase() 
  } else {
    firstLetter = string[0]
    const restOfString = string.slice(1)
    return firstLetter.toUpperCase() + restOfString
  }

}

module.exports = capitalize