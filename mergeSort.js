const mergeSort = (arr) => {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right =  arr.slice(mid);

  if (arr.length === 1) {
    return arr; 
  }

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  let leftPointer = 0;
  let rightPointer = 0; 
  let merged = [];
  
  for (let i = 0; i < sortedLeft.length + sortedRight.length; i++) {
    if(sortedLeft[leftPointer] < sortedRight[rightPointer]) {
      merged[i] = sortedLeft[leftPointer];
      leftPointer++;
    } else {
      merged[i] = sortedRight[rightPointer];
      rightPointer++;
    }
  }

  return merged;
}

console.log(mergeSort([2, 5, 1, 4, 7]));