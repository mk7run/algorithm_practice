function sortArray(integerArray){
	integerArray.sort(function(a,b){
		return a - b
	})
	return integerArray
}


var array = [5,3,1,4]
console.log(sortArray(array))