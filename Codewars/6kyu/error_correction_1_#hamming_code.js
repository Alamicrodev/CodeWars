// The Hamming Code is used to correct errors, so-called bit flips, in data transmissions. Later in the description follows a detailed explanation of how it works.

// In this Kata we will implement the Hamming Code with bit length 3; this has some advantages and disadvantages:
// [ + ] It's simple to implement
// [ + ] Compared to other versions of hamming code, we can correct more mistakes
// [ - ] The size of the input triples


// Task 1: Encode function

// Implement the encode function, using the following steps:
// convert every letter of the text to its ASCII value;
// convert ASCII values to 8-bit binary;
// triple every bit;
// concatenate the result;

// For example:
// input: "hey"
// --> 104, 101, 121                  // ASCII values
// --> 01101000, 01100101, 01111001   // binary
// --> 000111111000111000000000 000111111000000111000111 000111111111111000000111  // tripled
// --> "000111111000111000000000000111111000000111000111000111111111111000000111"  // concatenated


// Task 2: Decode function:
// Check if any errors happened and correct them. Errors will be only bit flips, and not a loss of bits:
// 111 --> 101 : this can and will happen
// 111 --> 11 : this cannot happen
// Note: the length of the input string is also always divisible by 24 so that you can convert it to an ASCII value.

// Steps:
// Split the input into groups of three characters;
// Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1, etc;
// Take each group of 8 characters and convert that binary number;
// Convert the binary values to decimal (ASCII);
// Convert the ASCII values to characters and concatenate the result

// For example:
// input: "100111111000111001000010000111111000000111001111000111110110111000010111"
// --> 100, 111, 111, 000, 111, 001, ...  // triples
// -->  0,   1,   1,   0,   1,   0,  ...  // corrected bits
// --> 01101000, 01100101, 01111001       // bytes
// --> 104, 101, 121                      // ASCII values
// --> "hey"


// -------------------- My Solution -----------------------------------


function encode(text) {
    text = String(text)
    let textArray = text.split("") 
  
    let AscciTextArray = textArray.map((character, index) => text.charCodeAt(index))
   
    console.log(AscciTextArray)
  
    let bits = ""
    AscciTextArray.forEach(element => {
      if (element > 64) {
        bits += '0'+Number(element).toString(2)
        
      } 
      else
      {
        bits += '00'+Number(element).toString(2)
      }
    });
  
    
    let tripledBits = ""
    for (let i = 0; i <bits.length; i++) {
      tripledBits += bits[i].repeat(3)
    }
  
    return tripledBits;
  }
  
  
  function decode(bits) {
  
    let bitcount = {"0": 0,
                    "1": 0 }
    let k = 0
  
    let singleBits = ""
  
    for (let i =0; i < bits.length; i++) {
  
      if (bits[i] == "0") {
         bitcount["0"] += 1
      }
      else 
      {
        bitcount["1"] += 1
      }
      k++; 
  
      if (k == 3) {
        k = 0;
        if (bitcount["0"] > bitcount["1"]) {
          singleBits += "0"
        }
        else {
          singleBits += "1"
        }
        bitcount["0"] = 0
        bitcount["1"] = 0
      }
  
    }
  
    
    let charsCode = []
       
    for (let index = 0; index < singleBits.length; index += 8) {
      charsCode.push(singleBits.slice(index, index + 8));
    }
  
  
    let asciiCode = charsCode.map((code) => 
      parseInt(code,2)
    )
  
  
    let char = ""
  
    asciiCode.forEach((charCode) => { char += String.fromCharCode(charCode)})
  
    return char; 
  
  }