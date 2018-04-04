//O(n^3)

// const tripleInversionSet = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] > arr[j] && arr[j] > arr[k]) {
//           result.push([arr[i], arr[j], arr[k]]);
//         }
//         if (result.length === 3){
//           return result;
//         }
//       }
//     }
//   }
// }

// O(n^2)
const tripleInversionSet = (arr) => {
  let result = []

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let large = [];
    let small = [];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < currentNum) {
        small.push(arr[j]);
      }
    }

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentNum) {
        large.push(arr[j]);
      }
    }

    for (let j = 0; j < large.length; j++) {
      for (let k = 0; k < small.length; k++) {
        result.push([large[j], currentNum, small[k]]);
        if (result.length === 3) {
          return result;
        }
      }
    }

    large = [];
    small = [];
  }
};

console.log(tripleInversionSet([7, 6, 8, 10, 12, 1, 3, 4, 5]));