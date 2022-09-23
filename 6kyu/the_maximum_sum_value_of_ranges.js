// Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end. Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

// For example:
//  Given arr = [1,-2,3,4,-5,-4,3,2,1], 
//        range = [[1,3],[0,4],[6,8]]
//  should return 6
 
//  calculation process:
//  range[1,3] = arr[1]+arr[2]+arr[3] = 5
//  range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
//  range[6,8] = arr[6]+arr[7]+arr[8] = 6
//  So the maximum sum value is 6

// Note:
// arr/$a always has at least 5 elements;
// range/$range/ranges always has at least 1 element;

// -------------------- My Solution -----------------------------------

function maxSum(arr,range){
    let sums = range.map((arange) => {
      
      let start = arange[0]
      let end = arange[1]
      let sum = 0
      
      for (let i = start; i<= end; i++) {
        sum += arr[i]
      }
      
      return sum
    })
    
    return Math.max(...sums)
    
  }
