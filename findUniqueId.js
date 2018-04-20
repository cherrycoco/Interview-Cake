const findUniqueId = (arr) => {
  let set = new Set ();

  for (let id of arr) {
    set.has(id) ? set.delete(id) : set.add(id);
  };

  for (let id of set) {
    return id;
  };
}

console.log(findUniqueId([1, 1, 2, 2, 3, 4, 5, 5, 4]));