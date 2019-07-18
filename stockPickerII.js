// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
//
// Example 1:
//
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


//think about interval
// lets say you have an array - [1,3,6]
// you want to capitalize on the numbers with the greatest difference
// 1 and 6 create the largest difference - 5
// but if you add [1,3]  - difference 2  and [3,6]-3 , you also get a difference of 5
// another example: [1,12,10] - 12 - 1 = 11
// so you dont need to worry about the difference between 1 and 10 because 12 is greater



var maxProfit = function(prices) {
    let total = 0;

    for(let i = 0; i < prices.length-1; i++) {
        if(prices[i+1] > prices[i]) total += prices[i+1] - prices[i];
    }

    return total;
};
