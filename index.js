'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
function ownSort(arr) {
  for(var i = 1; i<arr.length; i++ ){
    var temp = arr[i];
    var nextIndex = i - 1; 
    while (nextIndex>=0 && arr[nextIndex] > temp){
      arr[nextIndex + 1] = arr[nextIndex]
      nextIndex = nextIndex - 1;
    }
    arr[nextIndex+1] = temp
  }
  return arr
}


function binarySearch(search, array) {
  // Your searching code
  var bottomLim = 0;
  var topLim = array.length-1
  while (bottomLim <= topLim) {
    var midPoint = Math.floor((topLim + bottomLim) / 2)
    if (search == array[midPoint]) {
      return midPoint
    } else if (search > array[midPoint]) {
      bottomLim = midPoint + 1
    } else if (search < array[midPoint]) {
      topLim = midPoint - 1
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(ownSort(testArrayGenap))
// console.log(ownSort(testArrayGanjil))
// // Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = binary_search
