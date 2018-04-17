// const findRotationPoint = (arr, min = 0, max = arr.length - 1) => {

//   if (min > max) {
//     return 'no rotation point';
//   }

//   let mid = Math.floor((max - min) / 2 + min);

//   if (arr[mid] > arr[mid + 1]) {
//     return mid + 1;
//   }

//   if (arr[min] > arr[mid]) {
//     return findRotationPoint(arr, min, mid);
//   } else {
//     return findRotationPoint(arr, mid + 1, max);
//   }
// }

const findRotationPoint = (arr) => {
  let floorIdx = 0;
  let ceilIdx = arr.length - 1; 

  while(floorIdx < ceilIdx) {
    let mid = Math.floor((ceilIdx - floorIdx) / 2 + floorIdx);

    if (arr[mid] > arr[mid + 1]) {
      return mid+1; 
    }
    
    if (arr[floorIdx] > arr[mid]) {
      ceilIdx = mid;  
    } else {
      floorIdx = mid + 1;
    }
  }

  return 0;
}

var words = [
'ptolemaic',
'undulate',
'xenoepist',
'asymptote', // <-- rotates here!
'babka',
'engender',
'karpatka',
'othellolagkage',
];

console.log(findRotationPoint(words));