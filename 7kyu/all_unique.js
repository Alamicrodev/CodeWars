// Write a program to determine if a string contains only unique characters. 
// Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. 
// Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// -------------------- My Solution -----------------------------------

function hasUniqueChars(str){
    let charArray = []
    
    for (let i of str){
      if (charArray[i.charCodeAt(0)]) {
        return false
      }
      else 
        {
          charArray[i.charCodeAt(0)] = 1
        }
    }
    return true

}