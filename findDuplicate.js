const findDuplicate = (arr) => {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
}

console.log(findDuplicate([1, 4, 5, 6, 3, 5, 7, 8, 9]))