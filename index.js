'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++){
    let indexOfMin = i
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j
      }
    }
    let tmp = arr[i]
    arr[i] = arr[indexOfMin]
    arr[indexOfMin] = tmp
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  let startIndex = 0
  let endIndex = array.length - 1
  while(startIndex <= endIndex){
    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    if(search === array[middleIndex]){
      return true
    }else if(search < array[middleIndex]){ //continue searching at the left slice of array
      endIndex = middleIndex - 1;
    }else if(search > array[middleIndex]){ //continue searching at the right slice of array
      startIndex = middleIndex + 1;
    }
  }
  return false
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted)
console.log(arrayGanjilSorted)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = binarySearch
