function greaterNum (x,y){
    if (x < y){
        return `The greater number of ${x} and ${y} is ${y}`
    } else if (x > y){
        return `The greater number of ${x} and ${y} is ${x}`
    }
}

const results = greaterNum(20,9);
console.log(results)