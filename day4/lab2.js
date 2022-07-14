// write a function that loops through an array of numbers and returns the total sum of the array

const num = [1,2,3,4,5,6,7,8,9,12,24,36,47,68]
let sum = 0

for (let i = 0; i < num.length; i++){
    sum = sum + num[i]
}

console.log(sum)

const arr = [14, 4, 11, 13, 66, 10];
let sum1 = 0
for(const value of arr) {
    sum1 += value; // sum = sum + value
}
console.log(`the sum is ${sum1}`);