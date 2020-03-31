'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 0; i < arr.length; i++){
    let sml = arr[i];
    let smlInd = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < sml){
        sml = arr[j];
        smlInd = j;
      }
    }
    arr[smlInd] = arr[i];
    arr[i] = sml;
  }
  // Your sorting code
  return arr
}

function binary_search (search, array) {
  let mid = 0, bigInd = array.length - 1, smlInd = 0;
  while (bigInd !== smlInd){
    mid = Math.floor((smlInd + bigInd) / 2);
    if (array[mid] == search) return mid;
    else if (array[mid] > search) bigInd = mid;
    else {
      if (mid == smlInd) break;
      smlInd = mid;
    } 
  }
  // Your searching code
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
