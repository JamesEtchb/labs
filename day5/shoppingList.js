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
  "mustard",
]
let cart = ["milk", "bread", "cheese", "mustard"]
let finalList = []

for (let i = 0; i < shoppingList.length; i++) {
  let shoppingListItem = shoppingList[i]
  let foundInCart = false
  for (let j = 0; j < cart.length; j++){
    let cartItem = cart[j]
    if (shoppingListItem === cartItem){
      foundInCart = true
    }
  }
    if (!foundInCart){
    finalList.push(shoppingListItem)
  }
}


console.log(finalList)
