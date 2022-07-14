// write a function that loops through an array of numbers and returns the total sum of the array

const num = [1,2,3,4,5,6,7,8,9,12,24,36,47,68]
let sum = 0

for (let i = 0; i < num.length; i++){
    sum = sum + num[i]
}

console.log(sum)