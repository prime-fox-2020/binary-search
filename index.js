'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  //Insertion Sort
   for (let i = 1; i < arr.length; i++) {
    var temp = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (temp > arr[j]) {
        arr[j + 1] = temp
        break
      } else {
        arr[j + 1] = arr[j]
      }
      if (j == 0) {
        arr[0] = temp
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let startIndex=0, lastIndex=array.length-1 
  
  while(startIndex<=lastIndex ){
    let middleIndex=Math.floor((startIndex+lastIndex)/2)

    if(search==array[middleIndex]){
      return middleIndex
    }
    if(search<array[middleIndex]){
      lastIndex=middleIndex - 1

    }else if(search>array[middleIndex]){
      startIndex=middleIndex + 1
      
    }
    
  }
  return -1
  // return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// console.log(arrayGenapSorted,arrayGanjilSorted)
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
