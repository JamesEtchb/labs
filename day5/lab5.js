//given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

function reverseStr(str) {
    let originalArray= str.split("")
    let jointStr = ''
    for (let i = originalArray.length - 1; (i >= 0); i--) {
        jointStr += originalArray[i]
    }
    return jointStr
  }


console.log(reverseStr('The sky is blue'))
console.log(reverseStr("test"))
console.log(reverseStr("this is a test"))
console.log(reverseStr("abcdefghijklmnopqrstuvwxyz"))
console.log(reverseStr("James"))
