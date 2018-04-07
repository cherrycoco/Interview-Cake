const bracketChecker = (str) => {
  let stack = [];
  let opener = {
    '(': true,
    '[': true,
    '{': true,
  }
  let closer = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let char of str) {
    if (opener[char]) {
      stack.push(char);
    } else if (closer[char]) {
      let popped = stack.pop();
      if (popped !== closer[char]) {
        return false;
      }
    }
  }

  return (stack.length === 0) ? true : false;
}

console.log(bracketChecker('[{}]ds[]jfi('))