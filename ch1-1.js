// check if a string has unique characters
var checker = function(string){
	var checkedLetters = ""

	for (var i = 0; i < string.length; i++){
		var letter = string.charAt(i)
		if (checkedLetters.includes(letter)){
			return console.log("The string is not unique.")
		} else if (!checkedLetters.includes(letter) && i + 1 === string.length) {
			return console.log("The string is unique")
		} else {
			checkedLetters += letter
		}
	}
}


checker("aaa")
checker("abc")