const makeChange = (sum, coins) => {
  let dp = new Array(sum + 1);
  dp.fill(0);
  dp[0] = 1;

  coins.forEach((coin) => {
    for (let i = 0; i < dp.length; i++) {
      if (i - coin >= 0) {
        dp[i] = dp[i] + dp[i - coin];
      }
    }
  });

  return dp[sum];
}

console.log(makeChange(6, [1, 2, 3]));