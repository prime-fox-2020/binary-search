'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    idx = i;
    for (var j = i; j >= 0; j--) {
      if (arr[idx] < arr[j]) {
        var temp = arr[j];
        arr[j] = arr[idx];
        arr[idx] = temp;
      } else {
        idx = j;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
