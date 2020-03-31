'use strict'
/*
===========
Pseudo Code
===========
Insertion sort

LOOP array
  SET variable i TO 1
  SET variable key TO arr index i
  SET variable j TO i - 1;
  WHILE j is MORE THAN EQUALS TO 0 AND arr index j is MORE THAN key
    REASSIGN arr index j - 1 TO arr index J
    REASSIGN j TO j - 1;
  REASSIGN arr index j - 1 TO key
DISPLAY arr

Binary Search

SET awal to 0
SET akhir TO length of array - 1
SET variable tengah TO nothing (yet)
SET variable pos TO -1
SET variable cek TO false
WHILE cek STILL false AND awal IS LESS THAN EQUALS TO akhir
  ASSIGN tengah TO below rounded (awal+akhir)/2
  IF array index tengah EQUALS TO search (what we're looking for)
    REASSIGN cek TO TRUE
    REASSIGN pos TO tengah
  ELSE IF array index tengah is MORE THAN search
    REASSIGN akhir TO tengah - 1
  ELSE 
    REASSIGN awal to tengah + 1
DISPLAY pos
*/



var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return arr;
}
// console.log(ownSort(testArrayGanjil))

function binary_search (search, array) {
  // Your searching code
  let awal = 0;
  let akhir = array.length - 1;
  let tengah;
  let pos = -1;
  let cek = false;
 
  while (cek === false && awal <= akhir) {
      tengah = Math.floor((awal + akhir)/2);
      if (array[tengah] == search) {
          cek = true;
          pos = tengah;
      } else if (array[tengah] > search) {  //buat bawah
          akhir = tengah - 1;
      } else {  //buat atas
          awal = tengah + 1;
      }
  }
  return pos;
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
