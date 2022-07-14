function bigNum (x,y){

    if (x > y){
        return `Between ${x} and ${y}, ${x} is the bigger. `
    } else if (x < y){
        return `Between ${x} and ${y}, ${y} is the bigger. `
    } else {
        return `Between ${x} and ${y}, they're the same. `
    }

}

const result = bigNum(9,9)
console.log(result)