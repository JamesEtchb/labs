// LAB 10 - Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print "S grade" if marks is between 90 and 100.
// Print "A grade" if marks is between 80 and 90.
// Print "B grade" if marks is between 70 and 80.
// Print "C grade" if marks is between 60 and 70.
// Print "D grade" if marks is between 50 and 60.
// Print "E grade" if marks is between 40 and 50.
// Print "Student has failed" if marks is between 0 and 40.
// Else print "Invalid marks".

function findGrade (x){
    if (x <= 100 && x > 90){
    return `S grade` 
    } else if (x <= 90 && x > 80){
        return `A grade`
    } else if (x <= 80 && x > 70){
        return `B grade`
    } else if (x <= 70 && x > 60){
        return 'C grade'
    } else if (x <= 60 && x > 50){
        return 'D grade'
    } else if (x <= 50 && x > 40){
        return 'E grade'
    } else if (x <= 40 && x > 0){
        return `Student has failed`
    } else {
        return 'Invalid marks'
    }
} 

let result = findGrade(1)
console.log(result)