const mergeArr = (arr1, arr2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let resultPointer = 0;
  let result = [];

  while (resultPointer < (arr1.length + arr2.length)) {
    if (arr1[pointer1] <= arr2[pointer2] || !arr2[pointer2]) {
      result[resultPointer] = arr1[pointer1];
      pointer1++;
    } else if (arr2[pointer2] <= arr1[pointer1] || !arr1[pointer1]) {
      result[resultPointer] = arr2[pointer2];
      pointer2++;
    }

    resultPointer++
  }

  return result;
}

console.log(mergeArr([1, 3, 5, 9, 10, 11], [2]));