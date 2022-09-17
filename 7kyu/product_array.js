// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is 
// equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 
// Array/list's numbers Will be only Positives
// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// productArray ({1,5,2}) ==> return {10,2,5}
// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}

// -------------------- My Solution -----------------------------------

function productArray(numbers){
    let products = numbers.map((number,index,array) => {
      let product = 1 
      for (someIndex in array) {
        if (someIndex == index) {
          continue
        }
        else {
          product = product *array[someIndex]
        }
      }
      return product
    })
    
    return products
  }
