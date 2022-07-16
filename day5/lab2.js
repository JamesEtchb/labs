//Write a function that converts USD to any other currency of choice.

function moneyChanger(x,y){
    if (x === 'peso'){
        return y * 20.54
    } else if (x==='euro') { 
        return y * .9
    } else if (x==='yuan'){
        return y * 6.76
    }else{
        return 'Please enter a real currency'
    }
}

console.log(`If you change your money to Mexican Pesos you get: ${moneyChanger('peso', 10)}`)
console.log(`If you change your money to Europian Euro you get: ${moneyChanger('euro', 10)}`)
console.log(`If you change your money to Chinese Yuan you get: ${moneyChanger('yuan', 10)}`)
