//You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart
//have been removed.

let shoppingList = [
  "beer",
  "milk",
  "eggs",
  "bread",
  "ham",
  "cheese",
  "mayo",
  "mustard"
]
let cart = ["milk", "bread", "cheese", "mustard"]
let finalList = []

let buyIt = (shoppingList, cart) => {
  for (let i = 0; i < shoppingList.length; i++) {
    for (let j = o; j < cart.length; j++) {
        if (i==j){
           return finalList.push(j)
        }
    }
  }
}

console.log(finalList)

// list = shoppingList.filter(val => !cart.includes(val));
// console.log(list)