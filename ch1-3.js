function unduplicator(string){
	var result = ""

	for (var i = 0; i < string.length; i++){
		var letter = string.charAt(i);

		if (result.includes(letter) === false) {
			result += letter
		}
	}
	return result
}

console.log(unduplicator("hello"))