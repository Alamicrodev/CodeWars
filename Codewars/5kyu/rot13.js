// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
//  If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// -------------------- My Solution -----------------------------------


function rot13(message){

    let letters = 'abcdefghijklmnopqrstuvwxyz'    
    let messageArray = message.split("")
    
    for (let i = 0; i < messageArray.length; i++) {
  
      let is_upper = messageArray[i].toUpperCase() == messageArray[i]? true : false
  
      if (is_upper == true) {
        messageArray[i] = messageArray[i].toLowerCase()
      }
  
      if (letters.indexOf(messageArray[i]) != -1) {

        let alphaposition = letters.indexOf(messageArray[i])+13

        if (alphaposition >= letters.length) {
          alphaposition = alphaposition - (letters.length)
        }
  
        messageArray[i] = letters[alphaposition]
        
        if (is_upper == true) {
          messageArray[i] = messageArray[i].toUpperCase()
        }

      }
    }
    
    return messageArray.join(""); 
  }



console.log(rot13("test"));