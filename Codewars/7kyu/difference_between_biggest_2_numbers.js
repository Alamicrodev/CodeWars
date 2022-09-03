// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);

// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.

// -------------------- My Solution -----------------------------------

// Note this is a simple problem that's why I changed the input array,
//  usually it is not a good thing in programming to modify the input array.

function diffBig2(arr) {
    let maximumNum = Math.max(...arr)
    arr.splice(arr.indexOf(maximumNum),1)
    let secMax = Math.max(...arr)
  
    return maximumNum-secMax;
  }