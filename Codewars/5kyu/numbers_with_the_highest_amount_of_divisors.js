// The function proc_arrInt(), (Javascript: procArrInt()) 
// will receive an array of unsorted integers and should output a 
// list with the following results:


// Output should be [(1), (2), (3)] where:
// (1) - Total amount of numbers received
// (2) - Total prime numbers received
// (3) - a list [(a), (b)]
//       (a)- The highest amount of divisors that a certain number (or numbers) of the given  
//            array have
//       (b)- A sorted list with the numbers that have the largest amount of divisors. The list may  
//            have only one number

// Examples
// arr1 = [66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
//        20, 85, 22, 24, 68, 26, 59, 92, 93, 30]

// proc_arrInt(arr1) ------> [21, 2, [9, [36]]

// # 21 integers in the array
// # 2 primes: 73 and 97
// # 36 is the number that has the highest amount of divisors:
// # 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 divisors, including 1 and 36)

// -------------------- My Solution -----------------------------------

// this function returns the number of divisors of the given input number. 
function getDivisors(num) {
    let numberRoot = Math.sqrt(num)
    let divisorCount = 0
    for (let i = 1; i <= numberRoot; i++) {
      if (num % i == 0) {
        divisorCount += 2; 
      }
    }
    return divisorCount; 
  }

  
  function procArrInt(listNum) {
    let totalNumbers = listNum.length; 
    let primeNumbers = 0;
    let maxDivisors = 0; 
    let maxDivisorsNumberList = []
    for (num of listNum) {
      let divisorCount = getDivisors(num)
      if (divisorCount == 2) {
        primeNumbers++
      }
      if (divisorCount > maxDivisors) {
        maxDivisors= divisorCount 
        maxDivisorsNumberList = [num]
      }
      else if (divisorCount == maxDivisors) {
        maxDivisorsNumberList.push(num)
      }
    }
   
    maxDivisorsNumberList.sort((a,z) => a-z)
    
   return [totalNumbers, primeNumbers, [maxDivisors, maxDivisorsNumber]]
  }