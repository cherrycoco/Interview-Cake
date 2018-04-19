// const isPermutationPalindrome = (str) => {
//   let map = {};

//   for (let char of str) {
//     map[char] ? map[char]++ : map[char] = 1;
//   }
  
//   if (str.length % 2 === 0) {
//     for (let char in map) {
//       if (map[char] % 2 !== 0) {
//         return false;
//       }
//     }

//     return true;
//   } else {
//     let oddCount = 0;

//     for (let char in map) {
//       if (map[char] % 2 !== 0) {
//         oddCount++;
//       }
//     }

//     return oddCount === 1;
//   }
// }

const isPermutationPalindrome = (str) => {
  let set = new Set();

  for (let char of str) {
    (set.has(char)) ? set.delete(char) : set.add(char);
  }

  return str.length % 2 === 0 ? set.size === 0 : set.size === 1;
}

console.log(isPermutationPalindrome('ikk'));