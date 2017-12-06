// check if a string has unique characters
var checker = function(string){
	var checkedLetters = ""

	for (var i = 0; i < string.length; i++){
		var letter = string.charAt(i)
		if (checkedLetters.includes(letter)){
			return false
		}
			checkedLetters += letter
	}
	return true
}

// console.log(checker("aaa"))
// console.log(checker("abc"))
