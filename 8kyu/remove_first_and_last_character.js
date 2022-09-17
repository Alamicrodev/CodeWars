// Note: 8kyus are simple, please look at lower kyus for harder challenges

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

// -------------------- My Solution -----------------------------------

function removeChar(str){
    if (str.length < 2)  {
      return str
    }
     else 
       {
         let newstr = str.split("")
         newstr.pop()
         newstr.shift()
         newstr = newstr.join("")
         return newstr
       }
     
   };