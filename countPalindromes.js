const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let char = str[i];
    let compareChar = str[str.length - 1 - i];
    if (char !== compareChar) {
      return false;
    }
  }

  return true;
}

const countPalindromes = (str) => {
  let count = str.length;
  let i = 2;
  
  while (i <= str.length) {
    for (let j = 0; j < str.length - i + 1; j++) {
      let slicedStr = str.slice(j, j + i);
      console.log(slicedStr)
      if (isPalindrome(slicedStr)) {
        count++;
      }
    }
    i++; 
  }

  return count;
}


// console.log(isPalindrome('lllle'));

console.log(countPalindromes('hellolle'));