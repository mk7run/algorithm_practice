def anagram(string1, string2)
	string1.split("").sort == string2.split("").sort 
end

p anagram("melon", "lemon")
p anagram("hello", "yellow")