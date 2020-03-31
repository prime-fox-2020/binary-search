'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let selected = arr[i];
    let j = i -1;

    while (j >= 0 && selected < arr[j]) {
      arr[j+1] = arr[j];
      j = j - 1;
    }
    arr[j+1] = selected;

  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  let min = 0;
  let max = array.length -1;

  while (min <= max) {
      let med = Math.floor((max + min)/2);

      if (array[med]=== search) {
        return med;
      }
      else if (array[med]< search) {
        min = med + 1;
      }
      else {
        max = med -1;
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

console.log(arrayGanjilSorted);
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
