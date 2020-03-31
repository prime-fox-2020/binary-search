'use strict'          
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
   
  

  return arr
}


function binary_search(search, array) {
  // Your searching code
  let bottom = 0;
  let top = array.length-1
  while (bottom <= top) {
  let mid = Math.floor((top + bottom) / 2)
  if (search == array[mid]) {
  return mid
  } else if (search > array[mid]) {
  bottom = mid + 1
  } else if (search < array[mid]) {
  top = mid - 1
  }
  }
  return -1
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
