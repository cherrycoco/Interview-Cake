const maxProfit = (stockPrices) => {
  let maxProfit = 0;
  let minLoss = stockPrices[1] - stockPrices[0];
  let min = stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    let diff = stockPrices[i] - min; 

    if (stockPrices[i] - stockPrices[i - 1] > minLoss) {
      minLoss = stockPrices[i] - stockPrices[i - 1];
    }
    
    if (stockPrices[i] < min) {
      min = stockPrices[i];
    } else {
      if (diff > maxProfit) {
        maxProfit = diff;
      }
    }
  }

  return maxProfit ? maxProfit : minLoss;
}

console.log(maxProfit([15, 9, 7, 10]));