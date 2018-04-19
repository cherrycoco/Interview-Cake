const matchParen = (str, idx) => {
  let count = 0;
  for (let i = idx + 1; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      if (count === 0) {
        return i;
      } else {
        count--;
      }
    }
  }
}

console.log(matchParen("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));