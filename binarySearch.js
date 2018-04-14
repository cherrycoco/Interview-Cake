// O(log n)
// const binarySearch = (arr, target, min = 0, max = arr.length) => {
//   let mid = Math.floor((max - min) / 2) + min;

//   if (min > max || arr[mid] === undefined) {
//     return false;
//   }

//   if (arr[mid] === target) {
//     return true;
//   } else if (arr[mid] < target) {
//     return binarySearch(arr, target, mid + 1, max);
//   } else if (arr[mid] > target) {
//     return binarySearch(arr, target, min, mid - 1);
//   }
// }

const binarySearch = (arr, target) => {
  let max = arr.length;
  let min = 0;
  
  while (min <= max) {
    let mid = Math.floor((max - min) / 2) + min;
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else if (arr[mid] === undefined) {
      return false;
    }
  }

  return false; 
}

console.log(binarySearch([1, 2, 3, 4, 5], 7));