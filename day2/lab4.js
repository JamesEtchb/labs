function pluralize (x,y){
    if (x == 1){
        return `You have ${x} ${y}`
    } else {
        return `You have ${x} ${y}'s`
    }

}

const result = pluralize(4, 'dog')
console.log(result)