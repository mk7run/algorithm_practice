## check if a string has unique characters

def checker(string)
  checked_letters = ""
  string.each_char do |letter|
    if checked_letters.include?(letter)
      return false
		end
      checked_letters += letter
  end
  true
end

p checker("aaa")
p checker("abc")