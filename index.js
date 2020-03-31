'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    var temp = arr[i]
    for (let j = i - 1; j >= 0; j--) {
      if (temp > arr[j]) {
        arr[j + 1] = temp
        break
      } else {
        arr[j + 1] = arr[j]
      }
      if (j == 0) {
        arr[0] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var low = 0
  var high = array.length
  
  while (low <= high) {
    var mid = Math.floor((low + high) / 2)
    var guess = array[mid]
    if (guess == search) {
      return mid
    } else if (guess < search) {
      low = mid + 1
    } else if (guess > search) {
      high = mid - 1
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
