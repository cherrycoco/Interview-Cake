
const flattenArray = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flatArr = flattenArray(arr[i]);
      result = [...result, ...flatArr];
    } else {
      result.push(arr[i]);
    }
  }

  return result; 
};

console.log(flattenArray([1, 2, [3, [4, 5], 6, [4, 5, [4]]]]));