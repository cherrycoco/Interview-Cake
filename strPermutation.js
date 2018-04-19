const strPermutation = (str) => {
  if (str.length === 1) {
    return [str];
  }

  let permutations = strPermutation(str.slice(0, str.length - 1));

  let result = [];
  for (let i = 0; i < permutations.length; i++) {
    let word = permutations[i];

    for (let j = 0; j <= word.length; j++) {
      let char = str[str.length - 1];
      let newWord = word.slice(0, j) + char + word.slice(j);
      result.push(newWord);
    }
  }

  return result;
}

console.log(strPermutation('abcd'));