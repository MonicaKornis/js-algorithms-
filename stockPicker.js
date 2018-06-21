function stockPicker(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (var i = 0; i < prices.length; i++) {
    if(minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit; 
}


stockPicker([4,2,1,4,6,9]);
