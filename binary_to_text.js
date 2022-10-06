// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

// -------------------- My Solution -----------------------------------

function binaryToString(binary) {

    if (binary.length = 0) {
      return ""
    }
  
    let binaryChars = []
    
    for (let i = 0; i < binary.length; i+=8) {
      binaryChars.push(binary.substring(i, i+8))
    }
    
    let ascciCodes = binaryChars.map((item) => {
       return parseInt(Number(item), 2)
    }) 
    
    let chars = ascciCodes.map((item) => {
      return String.fromCharCode(item)
    })
    
    return chars.join("")
    
  }