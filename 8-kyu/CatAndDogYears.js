// QUESTION:
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
	let catYears = 0;
	let dogYears = 0;

	if (humanYears >= 1) {
		catYears += 15;
		dogYears += 15;
		console.log(catYears, dogYears);
	}
	if (humanYears >= 2) {
		catYears += 9;
		dogYears += 9;
		console.log(catYears, dogYears);
	}
	if (humanYears > 2) {
		for (i = 0; i < humanYears - 2; i++) {
			catYears += 4;
			dogYears += 5;
			console.log(catYears, dogYears);
		}
	}
	return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(5));
