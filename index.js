'use strict'
/*
  PSEUDOCODE Insert Sort
  BEGIN
  FOR i to arr length-1
    SET "tamp" to current index i arr value
    SET "j" to i - 1
    WHILE "j" MORE THAN EQUALS 0 AND current index j arr value MORE THAN "tamp"
      SET index j+1 arr to index j arr
      SUBTRACT j by 1
    END WHILE
    SET index j+1 arr value to "tamp"
  END FOR
  DISPLAY arr
  END
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    var tamp = arr[i]
    var j = i - 1
    while (j >= 0 && arr[j] > tamp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = tamp
  }
  return arr
}

/* 
PSEUDOCODE Binary Search
BEGIN
  SET "angkaAwal" to 0
  SET "angkaAkhir" to array.length - 1
  SET "flag" to boolean true
  SET "target_data" to any value 
  SET "array" to array data
  WHILE "angkaAwal" LESS THAN EQUALS "angkaAkhir"
    SET mid to CALC and ROUND DOWN ("angkaAwal"+"angkaAkhir") divided by 2
    IF "target_data" EQUALS indexed "mid" array
      DISPLAY "mid", SET "flag" to false and break loop
    ELSE IF "target_data" MORE THAN indexed 'mid' array
      SET "angkaAwal" to "mid" add by 1
    ELSE IF "target_data" MORE THAN indexed 'mid' array
      SET "angkaAkhir" to "mid" substact by 1
    END IF
  END WHILE
  
  IF flag EQUALS true
    DISPLAY -1 <-- Jika value tidak ada pada index
  END IF
  END
  */
function binary_search(search, array) {
  // Your searching code
  var angkaAwal = 0
  var angkaAkhir = array.length

  while (angkaAwal <= angkaAkhir) {
    var mid = Math.floor((angkaAwal + angkaAkhir) / 2)
    if (search == array[mid]) {
      return mid
    }
    else if (search > array[mid]) {
      angkaAwal = mid + 1
    }
    else if (search < array[mid]) {
      angkaAkhir = mid - 1
    }
  }
  return -1; // Jika tidak ada di index
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
