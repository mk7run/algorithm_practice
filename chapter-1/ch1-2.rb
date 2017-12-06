# reverse string

# input: string

# take last letter from input string and store into a new variable

# loop through input string until there are no more letters

# output: new reversed string

def reverser(string)
	reversed_string = ""
	i = string.length - 1
	while i >= 0
		reversed_string += string[i]
		i -= 1
	end
	reversed_string
end

p reverser("hello")