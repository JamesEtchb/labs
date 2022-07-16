//given a sentence reverse order: "the sky is blue" -> "euld si yks eht"

function reverseStr(x) {
  y = x.split("")
  z = y.reverse()
  a = z.join("")
  return a
}

console.log(reverseStr("test"))
console.log(reverseStr("this is a test"))
console.log(reverseStr("abcdefghijklmnopqrstuvwxyz"))
console.log(reverseStr("James"))
