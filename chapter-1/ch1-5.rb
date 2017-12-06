def buffer(string)
	result_string = ""

	string.each_char do |character|
		if character == " "
			result_string += "%20"
		else
			result_string += character
		end
	end
	result_string
end

p buffer("hello there")