# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def sorter array
new_array = array.select do |value|
    value.is_a?(Integer) && value % 2 == 1
    end
       new_array.sort!
end

p "Answer 1"
p sorter full_arr1
p sorter full_arr2







# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def letter_checker(array, letter)
    new_array = array.select do |value|
        value.include? letter
        end
    end

p "Answer 2"
p letter_checker(beverages_array, letter_o)
p letter_checker(beverages_array, letter_a)





# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def removeVowels string
    new_string = string.delete "aeiou"
end

p "Answer 3"
p removeVowels album1
p removeVowels album2
p removeVowels album3




# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def array_sum array_of_nums
    sum_array = array_of_nums.inject(0, :+)
end

p "Answer 4"
p array_sum nums_array1
p array_sum nums_array2






# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'

def is_palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a Palindrome"
    else 
        "#{string} is not a palindrome"
    end
end

p "answer 5"
p is_palindrome is_palindrome1
p is_palindrome is_palindrome2
p is_palindrome is_palindrome3