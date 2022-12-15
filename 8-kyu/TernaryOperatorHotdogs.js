// QUESTION:
// Complete function saleHotdog, function accepts 1 parameter: n,
// n is the number of hotdogs a customer will buy, different numbers have different prices.
// Return how much money will the customer spend to buy that number of hotdogs.

// PRICES:
// Number of hotdogs    price per unit (cents)
// n < 5	              100
// n >= 5 & n < 10      95
// n >= 10              90

function saleHotdogs(n) {
	return n < 5
		? n * 100
		: n >= 5 && n < 10
		? n * 95
		: n >= 10
		? n * 90
		: console.error();
};

console.log(saleHotdogs(5));
