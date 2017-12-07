// input: 2 strings

// criterias to be true:
//  - check if the length of the strings match
//  - check that it contains the same letters; alphabetize it
//  - rotate the second string's character until it matches the first string
// output: boolean

function isSubstring(string1, string2){
	if (string1.length === string2.length){
		if (anagram(string1, string2)){
			return rotater(string1, string2)
		}
	}
}

function anagram(string1, string2) {
	return string1.split("").sort().join() === string2.split("").sort().join()
}

function rotater(string1, string2){
	var rotatedArray = string2.split('')
	var letter = ""

	for (var i = 0; i < string2.length; i++){
		var rotatedString = rotatedArray.join('')

		if (string1 === rotatedString){
			return true
		} else {
		letter = rotatedArray.shift()
		rotatedArray.push(letter)
		}
	}
	false
}

console.log(isSubstring("waterbottle", "erbottlewat"))
