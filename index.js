'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }

  return arr
}

function binary_search (search, arr, left, right) {
  // Your searching code
  left = left || 0
  right = right || arr.length - 1

  if (right >= left) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === search)
      return mid

    if (arr[mid] > search)
      return binary_search(search, arr, left, mid - 1)

    return binary_search(search, arr, mid + 1, right)
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//Maaf bingung errornya dimana, klo pake test di bawah ini bisa
console.log(binary_search(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); //6
console.log(binary_search(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); //10
console.log(binary_search(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); //0
console.log(binary_search(21, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));//-1
console.log(binary_search(21, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]));//-1
console.log(binary_search(12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]));//-1

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
