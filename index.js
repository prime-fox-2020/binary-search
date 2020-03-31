'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  //INSERTION SORT
  // console.table([arr]);
  for (let i = 1; i < arr.length; i++) {
    // console.log('i: ', i, " ", arr[i]);
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
      // console.table([arr]);
    }
  }
  return arr
}

function binary_search(search, array) {
  // Your searching code
  let indexAwal = 0
  while (array.length >= 0) {
    var indexMid = Math.floor(array.length / 2)
    if (search == array[indexMid]) {
      return indexAwal + indexMid
    } else if (indexMid == 0 && search != array[indexMid]) {
      return -1
    } else if (search < array[indexMid]) {
      array = array.slice(0, indexMid)
    } else if (search > array[indexMid]) {
      array = array.slice(indexMid)
      indexAwal += indexMid
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
console.log('arrayGenapSorted: ', arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log('arrayGanjilSorted: ', arrayGanjilSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
