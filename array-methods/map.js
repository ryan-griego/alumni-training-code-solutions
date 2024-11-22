'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const salePrices = prices.map(priceObjects);
function priceObjects(num) {
  const sale = num / 2;
  return { price: num, salePrice: sale };
}
console.log('Price objects', salePrices);
const formatPrices = prices.map(formattedPrices);
function formattedPrices(num) {
  if (num !== Math.floor(num)) {
    return '$' + num.toFixed(2);
  } else {
    return '$' + num + '.00';
  }
}
console.log('Formatted prices', formatPrices);
