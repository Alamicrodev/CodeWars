// This is a very simple challenge, to look for harder challenges look for lower kyus

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// -------------------- My Solution -----------------------------------

function grow(x){
    let product = x.reduce((accumulator, value) => accumulator * value
      , 1)
    
    return product
   }

   