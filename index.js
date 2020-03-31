'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/*
  PSEUDOCODE ownSort
  FOR i to arr length-1
    FOR j to arr length 
      IF arr[j] more than arr [j+1]
      THEN 
        SET temp to arr[j]
        arr [j] to arr[j+1]
        arr [j+1] to temp
      ENFIF
    ENDFOR
  END FOR

  RETURN arr
*/

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[j]>arr[j+1]){
        var temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp 
      }    
    }
  }
  return arr
}

/* 
PSEUDOCODE binary_search
  SET "left" to 0
  SET "right" to array.length - 1
  SET "search" to any value <-- data that you want to be searched
  SET "array" to array data <-- array where search want to be searched
  WHILE "left" LESS THAN EQUAL "right"
    SET 'mid' to 'left' PLUS (ROUND DOWN ("right"-"left") divided by 2)
    IF index array[mid] EQUALS 'search'
      THEN
      RETURN 'mid'
    IF index array[mid] less than 'search' 
      THEN 
      SET "left" to "mid" add by 1
    ELSE 
      SET "right" to "mid" substact by 1
    END IF
  END WHILE

  RETURN -1 <-- inform that data is not found
END IF
  */


function binary_search (search, array) {
  // Your searching code
  var left =0
  var right=array.length-1
  while (left<=right){
    var mid=left + Math.floor((right-left)/2)
    if(array[mid]==search){
      return mid
    }
    if(array[mid]<search){
      left=mid+1
    }else{
      right=mid-1
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



