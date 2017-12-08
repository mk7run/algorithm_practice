def is_substring(string1, string2)
	if string1.length == string2.length
		if anagram(string1, string2)
			if rotate(string1, string2)
				print "#{string2} is substring of #{string1}"
			end
		else
			false
		end
	else
		false
	end
end

def anagram(string1, string2)
	string1.split("").sort == string2.split("").sort
end

def rotate(string1, string2)
	rotatedArray = string2.split('')
	i = 0
	while i < string2.length
		if rotatedArray == string1.split('')
			return true
		end
		letter = rotatedArray.shift()
		rotatedArray = rotatedArray.push(letter)
		i += 1
	end
	false
end

is_substring("waterbottle", "erbottlewat")