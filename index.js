'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elX = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > elX) {
        arr[j + 1] = arr[j];
        arr[j] = elX;
      } else { break; }
    }
  }
  return arr
}

/**

PSEDOCODE

Menentukan nilai index terendah dan tertinggi yang msih potensial

Selama nilai index terendah dan tertinggi tidak overlapping maka masih ada indek berpotensial menyimpan nilai yg kita cari (while loop)
  Langsung cek nilai pada index ditengah apakah sama dengan nilai yang dicari
  jika nilai sama langsung kembalikan nilai atau indek (sesuaikan dengan kasus)
  jika tidak sama bandinkan nilai pada index ditengah tadi dengan nilai yang dicari
    jika nilai pada index ditengah lebih besar dari pada nilai yg dicari
      maka eliminasi indek tengah dan semua index yg lebih besar dari index tengah (semua element yg berada di posisi sebelah kanan indek tengah)
      index maksimal yg berpotensial adalah index tengah minus satu
    jika nilai pada indek tengah lebih kecil daripada nilai yg dicari
      maka eliminasi indek tengah dan semua index yg lebih kecil dari index tengah (semua element yg berada diposisi sebelah kiri index tengah)
      index minimum yg berpotensial adalah index tengah plus satu
dengan demikian maka jika tidak menemukan nilai yg dicari, nilai index minimum dan nilai index maksimum akan overlapping (keluar dari while loop)

dan return nilai minus satu (-1)
 */

function binary_search (search, array) {
  let min = 0,
  max = array.length - 1,
  mid;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (array[mid] === search) return mid;
    if (array[mid] < search) {
      min = mid + 1;
    } else {
      max = mid -1;
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

// module.exports = binary_search
