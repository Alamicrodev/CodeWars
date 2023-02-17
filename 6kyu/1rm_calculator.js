// You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. 
// Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :

// Epley
// 1 RM=w(1+(r/30)) 

// McGlothin
// 1 RM=100w/101.3−(2.67123*r)
 
// Lombardi
// 1 RM=w*r^0.10
 
// Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. Since you are not sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above, rounded to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.

// -------------------- My Solution -----------------------------------

function calculate1RM(w, r){
    if (r==0) {
      return 0
    }
     else if (r == 1) {
       return w
     }
     else {
       let formula1Ans = Math.round(w*(1+(r/30)))
       let formula2Ans = Math.round((100*w)/(101.3-2.67123*(r)))
       let formula3Ans = Math.round(w*(r**0.10))
       
       let maximumWeight = Math.max(formula1Ans, formula2Ans, formula3Ans)
       
       return maximumWeight
     }
   } 