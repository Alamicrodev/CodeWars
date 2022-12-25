// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:
// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python & JavaScript: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

// -------------------- My Solution -----------------------------------
// Explanation: since we can't directly convert to Numbers because the functions don't support large nums, we imagine we are doing this on paper and 
// add each column individually and take the carry on to the next one. 

function sumStrings(a,b) { 
    //calc the length of loop   
    let length = 0  
    if (a.length >= b.length) {
        length = a.length 
         b = b.padStart(length, '0')
      } 
    else 
      {
        length = b.length 
        a = a.padStart(length, '0')
      }
  
    
    //carry: number to be passed from last colum of addition
    let carry = 0 
  
    let resultStr = ""
    
    for (let i=length-1; i>=0;i--)
      {
        let numFromA = Number(a[i])
        let numFromB = Number(b[i])
        let sum = numFromA + numFromB + carry
        let strSum = String(sum)
        
        if (sum >= 10) {
          let sumDigitsArr = strSum.split("")
          
          carry = Number(sumDigitsArr[0])
          resultStr = sumDigitsArr[1] + resultStr
          
        } 
        else {
          carry = 0
          resultStr = strSum + resultStr
        }
      
      }
    
    // there can still be a carry after adding all columns
    if (carry != 0) {
      resultStr = String(additor) + resultStr
    } 
    
    //the resulting string should not start with 0
    while (resultStr.startsWith("0")) {
      resultStr = resultStr.substr(1,resultStr.length-1)
    }
    
      return resultStr
  }