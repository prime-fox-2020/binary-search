'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/*
  PSEUDOCODE Insertion Sort
  FOR i to arr length-1
    SET "temp" to current index i arr value
    SET "j" to i - 1
    WHILE "j" MORE THAN EQUALS 0 AND current index j arr value MORE THAN "temp"
      SET index j+1 arr to index j arr
      SUBTRACT j by 1
    END WHILE
    SET index j+1 arr value to "temp"
  END FOR
  DISPLAY arr

*/
function ownSort(arr) {
  for(let i = 0; i < arr.length; i++){
    let temp = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}
/* 
PSEUDOCODE Binary Search
  SET "start" to 0
  SET "end" to array.length - 1
  SET "flag" to boolean true
  SET "target_data" to any value <-- data that want to be searched
  SET "array" to array data <-- array where target_data want to be searched

  WHILE "start" LESS THAN EQUALS "end"
    SET mid to CALC and ROUND DOWN ("start"+"end") divided by 2
    IF "target_data" EQUALS indexed "mid" array
      DISPLAY "mid", SET "flag" to false and break loop
    ELSE IF "target_data" MORE THAN indexed 'mid' array
      SET "start" to "mid" add by 1
    ELSE IF "target_data" MORE THAN indexed 'mid' array
      SET "end" to "mid" substact by 1
    END IF
  END WHILE
  
  IF flag EQUALS true
    DISPLAY -1 <-- inform that data is not found
  END IF
  */
function binary_search (search, array) {
  let start = 0
  let end = array.length - 1

  while(start <= end){
    let mid = Math.floor((start+end)/2)
    if(search == array[mid]){
      return mid
    }
    else if(search > array[mid]){
      start = mid + 1
    }
    else if(search < array[mid]){
      end = mid - 1
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
