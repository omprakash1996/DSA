function maxProfit(prices) {
  //Track the minimum price and seen so far
  let minPrice = prices[0];
  // Track the maximum profit
  let maxProfit = 0;
  // Loop through prices
  for (let i = 1; i < prices.length; i++) {
    let price = prices[i];
    // If this prices gives better profit,update maxProfit
    let profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
