// input: string

// go through each character of a string

// if character is a blank, add %20 into resulting string

// output: new string

function buffer(string){
	var resultString = ""
	for (var i = 0; i < string.length; i++){
		if (string[i] === " "){
			resultString += "%20"
		} else {
			resultString += string[i]
		}
	}
	return resultString
}

console.log(buffer("hello there"))