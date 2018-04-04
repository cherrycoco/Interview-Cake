// const count = (numbers, k) => {
//   let count = 0;
//   let p = 0; 

//   while (p < numbers.length) {
//     for (let i = 0 + p; i < numbers.length; i++) {
//       let product = 1;

//       for (let l = i; l >= (i - p); l--) {
//         product *= numbers[l];
//       }

//       if (product < k) {
//         count++;
//       }
//     }

//     p++;
//   }

//   return count;
// }

const count = (numbers, k) => {
  let left = 0; 
  let product = 1; 
  let count = 0; 

  // loop throught the array with the right pointer
  for (let right = 0; right < numbers.length; right++) {
    // update product by multiplying the current number pointed by the right pointer
    product *= numbers[right]; 

    // if the product is smaller than k
    if (product <= k) {
      // add the number of variation to count
      count += right - left + 1;
    } else {
      // while the product is larger than k
      while (product > k) {
        // divide the current number pointed by the left pointer by the product
        product /= numbers[left];
        // move left pointer
        left++;
      }
      // when the product is less than k add the variation to count
      count += right - left + 1;
    }
  }

  return count;
}

console.log(count([1, 2, 3], 4));

// console.log(count([1, 2, 3], 4));