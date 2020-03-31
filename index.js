'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let tmp = arr[i]
    while (j >= 0 && arr[j] > tmp) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = tmp
}
return arr
}


function binary_search(search, array) {
  let middle = 0;
  middle = (array.length - 1) / 2;
  middle = Math.floor(middle)
  let check = false;

  var count = 0;

  while (check == false) {
      if (array[middle] == search) check = true;
      else if (array[middle] < search) {
          middle = (middle + array.length - 1) / 2;
          middle = Math.floor(middle)
      }
      else if (array[middle] > search) {
          middle = middle / 2;
          middle = Math.floor(middle)
      }
      count++;
      if (count > array.length / 2) return -1
  }
  return middle;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
