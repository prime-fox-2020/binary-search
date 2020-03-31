'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  let awal = 0
  let akhir = array.length-1
    while(awal <= akhir){
      let tengah = Math.floor((awal+akhir)/2)
      if(array[tengah] < search){
        awal = tengah +1
      }else if(array[tengah] > search){
        akhir = tengah - 1
      }else if(array[tengah] == search){
        return true
      }
    }
  return false;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = binarySearch
