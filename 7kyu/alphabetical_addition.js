// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// -------------------- My Solution -----------------------------------

function addLetters(...letters) {
    let alphabets="1abcdefghijklmnopqrstuvwxyz"
    
    if (letters.length == 0) {
      return "z"
    }  
    else {
      let sum = 0
      for (let letter of letters) {
        sum += alphabets.indexOf(letter)
      }
      while (sum > alphabets.length-1) {
        sum = sum - alphabets.length + 1
      }
      return alphabets[sum]
    }
  }