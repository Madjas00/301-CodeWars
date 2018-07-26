The problem for this challenge was that we needed to take in two strings. We then needed to transform the first string into the second one a step at a time. The exapmple was taking the string 'bubble gum' and turning it into 'turtle ham'. We needed it step by step like 
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham

To start we turned both of the strings into arrays using .split(). We then looped through the first array. We checked to see where the strings didn't match and made the first array match the second array at the position where the letter didn't find a match. We also made a variable called answer that took the original string and added a new line. Inside the loop we made answer equal answer plus the new array and turned it into a string using .join. We also added a new line to the end of it. This was able to solve the challenge.