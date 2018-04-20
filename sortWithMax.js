const sortWithMax = (arr, max) => {
  let map = {};
  let result = [];
  for (let num of arr) {
    map[num] ? map[num]++ : map[num] = 1;
  }

  for (let i = 0; i <= max; i++) {
    if (map[i]) {
      for (let j = 1; j <= map[i]; j++) {
        result.push(i);
      }
    }
  }

  return result;
}

console.log(sortWithMax([3, 1, 1, 1, 8, 10, 2], 10));