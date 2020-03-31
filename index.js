'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
    var length = arr.length;
    for (var i = 1; i < length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};


function binary_search(search, array) {
    var awal = 0;
    var akhir = array.length - 1;
    var posisi = -1;
    var found = false;
    var tengah;
 
    while (found === false && awal <= akhir) {
        tengah = Math.floor((awal + akhir)/2);
        if (array[tengah] == search) {
            found = true;
            posisi = tengah;
        } else if (array[tengah] > search) {
            akhir = tengah - 1;
        } else {
            awal = tengah + 1;
        }
    }
    return posisi;
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
