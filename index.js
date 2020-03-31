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
        idx = j;
      } else {
        idx = j;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  var firstIndex = 0;
  var lastIndex = array.length-1;
  var mid;
  while (array[mid] != search) {
    mid = Math.floor((lastIndex + firstIndex) / 2);
    if (array[mid] === search) {
      return mid;
    } else if (array[mid] > search) {
      lastIndex = mid - 1;
    } else if (array[mid] < search) {
      firstIndex = mid + 1;
    }
    if (lastIndex < firstIndex) {
      break;
    }
  }
  return -1;
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
