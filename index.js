'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elX = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > elX) {
        arr[j + 1] = arr[j];
        arr[j] = elX;
      } else { break; }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = binary_search
