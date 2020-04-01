'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let f = 0;
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1, cache = arr[i]
    if (j >= 0 && arr[j] > cache) {
      arr[j+1] = arr[j];
      j--;
      f++;
    }
    arr[j+1] = cache
  }
  return f == 0 ? arr : ownSort(arr)
}

function binary_search (search, array) {
  // Your searching code
  let left = 0, right = array.length-1;
  while (left <= right) {
      let mid = left + Math.floor((right-left)/2);
      if (array[mid] == search) {
          return mid;
      }
      if (array[mid] < search) {
          left = mid+1;
      } else {
          right = mid-1;
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
