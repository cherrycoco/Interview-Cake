const productExceptSelf = (arr) => {
  let total = arr.reduce((acc, num) => acc *= num);
  let dp = new Array(arr.length);
  dp[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    dp[i] = dp[i - 1] * arr[i - 1];
  }

  let productSoFar = arr[arr.length - 1]; 
  for (let i = arr.length - 2; i >= 0; i--) {
    dp[i] *= productSoFar;
    productSoFar *= arr[i];
  }
  
  return dp;
}

console.log(productExceptSelf([1, 7, 3, 4]));