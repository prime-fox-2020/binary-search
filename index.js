/* 
=========PSEUDOCODE===============
//INSERTION SORT
START FUNCTION ownSort WITH PARAMETER arr
  FOR ITERATION BY i ON arr
    FOR ITERATION BY j EQUAL 0 TO i
      IF arr INDEX OF i LESS THAN arr INDEX OF j THEN
        SET temp EQUAL TO arr INDEX OF i
        arr INDEX OF i EQUAL TO arr INDEX OF j
        arr INDEX OF j EQUAL TO temp
      END IF
    END FOR
  END FOR
  DISPLAY arr
END FUNCTION


//BINARY SEARCH
START FUNCTION binary_search WITH PARAMETER OF search AND array
  SET high EQUAL TO LENGTH OF array MINUS 1
  SET low  EQUAL TO 0
  SET mid  EQUAL TO HALF OF high PLUS low DIVIDED BY 2
  WHILE low LESS THAN EUAL high AND array INDEX mid NOT EQUAL TO search
    IF search BIGGER THAN array INDEX OF mid THEN low EQUAL TO mid PLUS 1
    ELSE high EQUAL TO mid MINUS 1
    END IF
    mid  EQUAL TO HALF OF high PLUS low DIVIDED BY 2
  END WHILE
  IF search EQUAL TO array INDEX OF mid THEN DISPLAY mid
  ELSE DISPLAY -1;
  END IF
END FUNCTION
}
*/


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
  }
  if(search === array[mid]) return mid;
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
