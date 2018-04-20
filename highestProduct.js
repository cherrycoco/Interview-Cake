// const highestProduct = (arr) => {
//   let positive = [];
//   let negative = [];
  
//   for (let num of arr) {
//     if (Math.sign(num) === 1) {
//       positive.push(num);
//     } else {
//       negative.push(num);
//     }
//   }
  
//   let subArr = positive.slice(0, 3);
//   for (let i = 3; i < positive.length; i++) {
//     let min = Math.min(...subArr); 

//     for (let j = 0; j < subArr.length; j++) {
//       if (subArr[j] === min && subArr[j] < positive[i]) {
//         subArr[j] = positive[i];
//       }
//     }
//   }

//   subArr.sort((a, b) => a - b);
//   console.log(subArr);
  
//   if (negative.length < 2) {
//     return subArr; 
//   }

//   let smallNegs = negative.slice(0, 2);
//   for (let i = 2; i < negative.length; i++) {
//     let largerNeg = Math.max(...smallNegs);
//     if (largerNeg > negative[i]) {
//       if (largerNeg === smallNegs[0]) {
//         smallNegs[0] = negative[i];
//       } else {
//         smallNegs[1] = negative[i];
//       }
//     }
//   }

//   let productOfNegs = smallNegs[0] * smallNegs[1];

//   if (subArr[0] * subArr[1] < productOfNegs) {
//     subArr = [...smallNegs, subArr[2]];
//   }

//   return subArr;
// }

const highestProduct = (arr) => {
  let highestProductOf3 = arr[0] * arr[1] * arr[2];
  let highestProductOf2 = arr[0] * arr[1]; 
  let lowestProductOf2 = arr[0] * arr[1]; 
  let highest = Math.max(arr[0], arr[1]); 
  let lowest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let current = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      highestProductOf2 * current, 
      lowestProductOf2 * current
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      highest * current,
      lowest * current,
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      highest * current,
      lowest * current,
    );

    lowest = Math.min(
      lowest,
      current,
    );

    highest = Math.max(
      highest,
      current,
    );
  }

  return highestProductOf3;
}

console.log(highestProduct([1, 3, -9, -10, 10]));