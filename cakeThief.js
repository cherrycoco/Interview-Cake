const cakeThief = (cakes, weight) => {
  let dp = new Array (weight + 1);
  dp.fill(0);

  for (let i = 1; i < dp.length; i++) {
    cakes.forEach(cake => {
      if (cake.weight <= i) {
        let leftoverWeight = i - cake.weight;
        let totalVal = cake.value;

        if (leftoverWeight > 0) {
          totalVal += dp[leftoverWeight];
        }

        dp[i] = Math.max(dp[i], totalVal);
      }
    });
  }

  console.log(dp);
  return dp[weight];
}

let cakeTypes = [
  {weight: 3, value: 40},
  {weight: 5, value: 70},
  {weight: 1, value: 10}
]
console.log(cakeThief(cakeTypes, 8));