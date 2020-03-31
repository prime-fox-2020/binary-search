'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let inspected = arr[i + 1];
    for (let j = i; j >= 0; j--) {
      if (arr[j] > inspected) {
        arr[j + 1] = arr[j];
        arr[j] = inspected;
      } else {
        break;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  let begin = 0;
  let mid = Math.floor(array.length/2);
  let end = array.length - 1;
  let findFlag = false;
  do {
    if (begin == mid && mid == end) {
      findFlag = true;
    }
    if (search === array[mid]) {
      return mid;
    } else if (search < array[mid]) { 
      end = mid - 1;
      mid = Math.floor(end/2);
    } else if (search > array[mid]) {
      begin = mid + 1;
      mid = begin + Math.floor((end-begin)/2);
    }
  }
  while (!findFlag);
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search