# remove duplicate characters from a string

# input: string

# for each character, store characters that have have not been used yet in the string

# output: string without duplicate characters

def unduplicater(string)
  result = ""
  string.each_char do |letter|
    if !result.include?(letter)
      result += letter
		end
  end
  return result
end

p unduplicater("aa")
p unduplicater("hello")