const prefixToPostfix = (prefix) => {
  let prefixArr = prefix.split('');
  let map = {};
  let count = 65; 
  let operators = {'+': 1, '-': 1, '/': 1, '*': 1};
  let result = '';

  while (prefixArr.length > 1) {
    // loop through the prefix array 
    for (let i = 0; i < prefixArr.length - 2; i++) {
      let char1 = prefixArr[i];
      let char2 = prefixArr[i + 1];
      let char3 = prefixArr[i + 2];

      // if three consecutive characters are identified as (operator, operand, operand)
      if (operators[char1] && !operators[char2] && !operators[char3]) {
        // remove the three characters from prefix array and sub-in a letter corresponding to the count
        let removedArr = prefixArr.splice(i, 3, String.fromCharCode(count));
        // change the prefix to postfix
        let operatorRemoved = removedArr.shift();
        removedArr.push(operatorRemoved);
        // map the postfix string to the corresponding count letter
        map[String.fromCharCode(count)] = removedArr.join('');
        // increment count
        count++;
      }
    }
  }
  // result will start with the highest order operation
  result = map[prefixArr[0]];
  //decrement count
  count--;
  // terminate the loop when count is equal to 65
  while (count > 65) {
    // loop through the result string 
    for (let i = 0; i < result.length; i++) {
      // if the character is a mapped character
      if(map[result[i]]) {
        // change out the characters to the corresponding value from map
        result = result.slice(0, i) + map[result[i]] + result.slice(i + 1);
        count--;
      }
    }
  }

  return result;
}

console.log(prefixToPostfix('+1*23'));