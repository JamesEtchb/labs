// LAB 9 - Perform arithmetic operations on two numbers
// Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
// Print result of num1+num2 if operation is "add"
// Print result of num1-num2 if operation is "subtract"
// Print result of num1*num2 if operation is "multiply"
// Print result of num1/num2 if operation is "divide"
// Print result of num1%num2 if operation is "modulus"
// Else print "Invalid operation"

function evalNumbers(x,y,z){
    if (x == "add"){
        return y + z
    } else if (x == "subtract"){
        return y - z
    } else if (x == "multiply"){
        return y * z
    } else if (x == "divide"){
        return y / z
    } else if (x == "modulus"){
        return y % z
    } else {
        return `Invalid operation`
    }
}

const result = evalNumbers('add',5,10)
console.log(result)