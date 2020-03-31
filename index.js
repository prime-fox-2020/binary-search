'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i]
    var cek = false
    for (let j  = i+1; j < arr.length; j++) {
        if(temp>arr[j]){
            temp=arr[j]
            var index = j
            cek = true
        }
    }
    if(cek){
        var tampung = arr[i]
        arr[i]=temp
        arr[index]=tampung
    }
}

  return arr
}

function binary_search (search, array) {
  // Your searching code
  var cek = false
  for (let i = 0; i < array.length; i++) {
      if(search==array[i]){
          cek = true
      }
  }
  if(!cek){
      return -1
  }

  var low = 0
  var high = array.length-1
  var mid;
  while(low <= high){
      mid = Math.floor((high+low)/2)
      if(array[mid] === search){
          return mid
      } else if ( array[mid] < search){
          low = mid+1;
      } else{
          high = mid-1;
      }
  }
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

console.log(binary_search(90, arrayGenapSorted))
console.log(binary_search(89, arrayGanjilSorted))


module.exports = binary_search