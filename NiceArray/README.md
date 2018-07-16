The problem of this challenge is that we take in an array. Every value in the array has an element of value -1 or value +1. The example they provide looks like this "[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1"

So to solve this we need to take the array and loop through it. We then tell if that if it does not include at any index location a number that is -1 or +1 to return false. And if it does include these things to return true. We also told it that if the arrays length is less than one to also return false. This solved the challenge.
