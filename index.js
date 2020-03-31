'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let high = array.length-1,
      low  = 0,
      mid  = Math.floor((high+low)/2);
  while(low <= high && array[mid] !== search){
    if(search > array[mid]) low = mid+1;
    else high = mid-1;
    mid = Math.floor((high+low)/2);
    // console.log("high: " + high)
    // console.log(low)
  }
  if(search === array[mid]) return true;
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
