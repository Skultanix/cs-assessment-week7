///Sum zero
let baseCond = false
let testArr = [10, 11 ,13, 14, 5, -10]
function sumZero(arr) {
    for(i = 0; i < arr.length; i++) {
        arr.forEach(element => {
            if(arr[i] + element === 0) {
            baseCond = true
          }
      })
  }
  return baseCond
}
console.log(sumZero(testArr))
///Unique Characters
let uniqCheck = (aWord) => {
    //make new set from the initial string
    const aWordSet = new Set(aWord)
    //make an array from a the initial string using spread
    let aWordArr = [...aWord]
    //compare the length of the array to the length of the set and return the value
    return aWordSet.size === aWordArr.length
  } 
console.log(uniqCheck('moon'))
///Pangram Sentence
function isPangram(str) {
    let alphabetCheck = /([a-z])(?!.*\1)/gi
    return(str.match(alphabetCheck)).length === 26
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
///Longest Word
function longestWord(arr) {
    let longest = 0
    for(i = 0; i < arr.length; i++) {
        if(arr[i].length > longest) {
            longest = arr[i].length
        }
    }
    return longest
}
console.log(longestWord(["radial", "radical", "elephant", "Wilbur"]))