// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

const arr = ["James", "Matt", "Bob", "John"]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}
