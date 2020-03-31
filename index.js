'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (let i = 0; i < arr.length; i++){
    let indexOfMin = i;
    let j = i; 
    let min = arr[i];

    
    while (j < arr.length){
        if (arr[j] < min){
            min = arr[j];
            indexOfMin = j;
        }
        j++;
    }

    if (indexOfMin !== i){ 
        let swap = arr[i];
        arr[i] = arr[indexOfMin];
        arr[indexOfMin] = swap;
    }
}
return arr;
}

function binary_search (search, array, start = 0, end = array.length - 1) {
    let flag = false;
    array.forEach(num => {
      if(search === num){
        flag = true;
      }
    });

    if(flag === true){
      let mid = Math.floor((start + end) / 2);
      if(search === array[mid]){
        return mid;
      }
  
      if(array[mid] > search){
        return binary_search(search, array, start, (mid - 1));
      } else if(array[mid] < search){
        return binary_search(search, array, (mid + 1), end);
      }
  
      if(array[array.length - 1] < search || array[0] > search){
        return -1;
      }
    } else {
      return 'Wrong odd / even number!';
    }
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);


// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

module.exports = binary_search;
