// LAB 8 - Find the a number is present in given range
// Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.
// Print "Between the range" if num is between start and end values
// Else Print "Outside the range" since num is outside start and end values.

function checkInRange(x,y,z){
    if (x >= y && x <= z){
        return `Between the range`
    } else {
        return `Outside the range`
    }
}

const result = checkInRange(180,18,240)
console.log(result)