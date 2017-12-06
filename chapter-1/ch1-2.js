function reverser(string){
	var reversedString = "";

	for (var i = string.length; i > 0; i--){
		reversedString += string[i-1];
	}
	return reversedString;
}

console.log(reverser("hello"))