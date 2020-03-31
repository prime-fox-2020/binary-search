'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
    var max = arr.length;
    for (let a = 1; a < max; a++) {
      var min = arr[a];
      var b = a - 1;
      while (b >= 0 && arr[b] > min) {
        arr[b + 1] = arr[b];
        b = b - 1;
      }
      arr[b + 1] = min;
    }
    return arr;
}

function binarySearch (search, array) {
  // Your searching code
  var min = 0;
  var max = array.length - 1;
  while (min != max) {
    var mid = Math.floor((min + max) / 2);
    if (search < array[mid]) {
      max = mid - 1;
    } else {
      min = mid;
    }

    if (array[min] == search) {
      return min;
    } else if (array[max] == search) {
      return max;
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = binarySearch;
