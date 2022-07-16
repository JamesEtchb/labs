//Write a function to convert temperatures from Fahrenheit to Celsius.

function convertFToC(x) {
  let result = x - 32 * (5 / 9)
  return result.toFixed(2)
}

console.log(convertFToC(60))
console.log(convertFToC(90))
console.log(convertFToC(12))
