function isNumber(x){
    if (x == NaN){
        return `Variable is not a number`
    } else {
        return `Variable is a valid number`
    }

}

const result = isNumber('asd')
console.log(result)