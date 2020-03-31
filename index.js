'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  //INSERTION SORT
  console.table([arr]);
  for (let i = 1; i < arr.length; i++) {
    console.log('i: ', i, " ", arr[i]);
    let temp1 = arr[i]
    let tempIdx = i
    for (let j = i - 1; j >= 0; j--) {
      if (temp1 < arr[j]) {
        let temp = arr[tempIdx]
        arr[tempIdx] = arr[j]
        arr[j] = temp
        tempIdx = j
      } else {
        break
      }
      console.table([arr]);
    }
  }
  return arr
}

function binarySearch(search, array) {
  // Your searching code
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
