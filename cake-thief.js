// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in an array with two indices:

// An integer representing the weight of the cake in kilograms
// An integer representing the monetary value of the cake in British pounds

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a method max_duffel_bag_value() that takes an array of cake type arrays and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// input: nested array with weight capacity and maximum monetary value

// sort the nest arrays by monetary value
// take the most from the highest end that meets the maximum capacity the duffle bag can take

// output: nested array with the highest monetary value but meets the duffle bag weight capacity

function maxDuffelBagValue(cakeArray){
	var sortedCakes = sortCakeArray(cakeArray);
	var cakeNumber = capacitor(sortedCakes);
	return cakeHeist(sortedCakes, cakeNumber)
}

function sortCakeArray(cakeArray){
	cakeArray.sort(function(a,b){
		return b[1] - a[1] 
	})
	return cakeArray
}

function capacitor(sortedCakes){
	var weight = 0
	var quantity = 0
	sortedCakes.forEach(function(cake){
		if (weight >= 20){
		} else {
			quantity = quantity + 1
			weight = weight + cake[0]
		}
	})
	return quantity	
}

function cakeHeist(sortedCakes, number){
	var cakeBag = []
	for (var i = 0; i < number; i++){
		sortedCakes.forEach(function(cake){
			cakeBag.push(cake)
		})
	}
	console.log(cakeBag)
	return cakeBag
}

var cakeArray = [[20, 30], [10, 40], [60, 10]]
maxDuffelBagValue(cakeArray)