// input: 2 strings

// split strings into arrays

// sort the array in alphabetical order

// output: boolean

function anagram(string1, string2) {
	return string1.split("").sort().join() === string2.split("").sort().join()
}

// console.log(anagram("melon", "lemon"))

// console.log(anagram("hello", "yellow"))