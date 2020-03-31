'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
                    // 0   1   2   3   4   5   6   7   8
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
                    // 0   1   2   3   4   5   6   7   8

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1 
    let temp = arr[i]

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (search == array[middle]) {
      return middle
    }
    if (search > array[middle]) {
      start = middle + 1
    }
    if (search < array[middle]) {
      end = middle - 1
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log('array genap sorted: ', arrayGenapSorted);
console.log('array ganjil sorted: ', arrayGanjilSorted);

// array genap sorted:  [
//   8, 10, 10, 18, 22, 22, 32, 40, 90
//   0  1   2   3   4   5   6   7   8
// ]
// array ganjil sorted:  [
//   3, 21, 31, 53, 53, 55, 77, 85, 89
//   0  1   2   3   4   5   6   7   8
// ]

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
