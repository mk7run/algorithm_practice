## Cracking the Code Algorithm 1.1

def checker(string)
  checked_letters = ""
  string.each_char do |letter|
    if checked_letters.include?(letter)
      return "The string is not unique"
    else
      checked_letters += letter
    end
      "The string is unique!"
  end
end