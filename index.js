'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]){
        var swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  // console.log(arr);
  
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var a = 0
  var b = array.length - 1
  
  while (a <= b){
    var temp = Math.floor((a + b) / 2)
    if (array[temp] == search){
      return temp
      
    } else if (array[temp] < search){
      a = temp + 1
    } else {
      b = temp -1
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
