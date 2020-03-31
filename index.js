'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

/**
 * PSEUDOCODE
 * FUNCTION ownSort WITH PARAMETER ARRAY
 *  FOR 
 *      i START FROM 0
 *      i LESST THAN THE LENGTH OF ARRAY
 *      ADD i BY 1
 *        SET temp EQUAL TO i
 *        FOR 
 *          j START FROM 1 + i
 *          j LESST THAN THE LENGTH OF ARRAY
 *          ADD j BY 1
 *            IF ARRAY INDEX temp GREATER THAN ARRAY INDEX j
 *                 temp EQUAL TO j
 *            END IF
 *        END FOR
 *     IF temp NOT EQUAL TO i
 *        [ARRAY INDEX i, ARRAY INDEX temp] = [ARRAY INDEX temp, ARRAY INDEX i]
 *     END IF
 * END FOR
 * DISPLAY ARRAY
 * END FUNCTION
 */
function ownSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var temp = i;
    for(var j = i+1; j < arr.length; j++) {
      if(arr[temp] > arr[j]) {
        temp = j
      }
    }
    if(temp !== i) {
      [arr[i], arr[temp]] = [arr[temp], arr[i]]
    }
  }
  return arr
}



/**
 * FUNCTION binary_search WITH TO PARAMETER (NUMBER AND ARRAY)
 *  SET low EQUAL TO 0
 *  SET high EQUAL TO THE LENGTH OF ARRAY - 1
 *  WHILE low SMALLER THAN high
 *    SET mid EQUAL TO (low + high)/2
 *    IF ARRAY INDEX mid EQUAL TO NUMBER
 *      DISPLAY mid
 *    ELSE IF ARRAY INDEX mid SMALLER THAN NUMBER
 *      ADD low BY 1
 *    ELSE IF ARRAY INDEX mid GREATER THAN NUMBER
 *      MINUS high BY 1
 *    END IF
 *  END WHILE
 *  DISPLAY - 1;
 * END FUNCTION
 */
function binary_search (search, array) {
  // Your searching codev
  var low = 0;
  var high = array.length - 1;
  while(low <= high) {
    var mid = Math.floor((low+high)/2);
    if(array[mid] === search) {
      return mid
    } else if (array[mid] < search) {
      low = mid + 1;
    } else if(array[mid] > search) {
      high = mid - 1;
    }
  }
  return -1;
}
// console.log(ownSort(testArrayGenap))
// console.log(ownSort(testArrayGanjil))

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
