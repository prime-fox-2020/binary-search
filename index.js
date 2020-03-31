'use strict'

//Pseudocode
//SET function that take array as parameter
// FOR loop length of arr
//  INIT j to index i-1
//  INIT temp to arr index i
//  WHILE j Greater Than or equal to 0 AND arr index j Greater than temp
//    arr index j plus 1 is to arr index j Then
//    DECREMENT J
//  ENDWHILE
//  arr index j plus 1 is temp
// ENDFOR
// DISPLAY arr


// SET Function binarySearch that takes 2 parameters
//  INIT awal to 0
//  INIT akhir to length of parameter array minus 1
//    WHILE awal less than or equal to akhir then
//      INIT tengah is floor of (awal plus akhir) div by 2
//      IF array index tengah less than search (parameter) Then
//        awal is tengah plus 1
//      ELSE array index tengah greater than search Then
//        akhir is tengah minus 1
//      ELSE array index tengah is equal to search then
//        Display tengah
//      ENDIF
//    ENDWHILE
//  DISPLAY -1

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
        return tengah
      }
    }
  return -1;
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
