'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/**
 * pseudocode :
 * SET function ownSort(arr)
 * FOR inis i in arr
 * SET VAR temp EQUAL arr[i]
 * SET VAR j EQUAL i-1
 * 
 * WHILE (inis j AND arr[j] < temp)
 * arr[j+1] EQUAL arr[j]
 * j EQUAL j-1
 * arr[j+1] EQUAL temp
 * RETURN arr
 */

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length; i++){
    let temp = arr[i]
    let j = i -1

    while(j >= 0 && arr[j] > temp){
      arr[j+1] = arr[j]
      j = j-1
    }

    arr[j+1] = temp 
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

//module.exports = binary_search
