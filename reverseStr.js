const reverseStr = (str) => {
  let arr = str.split('');

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    console.log(arr)
  }

  return arr.join('');
}

console.log(reverseStr('cut'));

const reverseWords = (str) => {
  let reversedStr = reverseStr(str);
  let arr = reversedStr.split(' ');
  let reversedArr = arr.map(word => reverseStr(word));

  return reversedArr.join(' ');

}

console.log(reverseWords('find you will'));