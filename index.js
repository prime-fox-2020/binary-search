'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let length = arr.length;
  for (let i = 1; i < length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  // console.log(arr)
  return arr;
}

function binarySearch (search, array) {
  // Your searching code
  var min = 0
  var max = array.length - 1
  while (min != max) {
    var mid = Math.trunc((min + max) / 2)
    if (search < array[mid]) {
      max = mid - 1
    } else {
      min = mid;
    }

    if (array[min] == search) {
      return min
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
