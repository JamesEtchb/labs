function biggestNum (x,y,z){
    if (x>y && x>z){
        return `The biggest number of the three is ${x}`
    } else if (y>z){
        return `The biggest number of the three is ${y}`
    } else {
        return `The biggest number of the three is ${z}`
    }
}

const result = biggestNum(8,15,5)
console.log(result)