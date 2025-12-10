// Create your object here
const cart = {
    customerName: "Alex",
    totalPrice: 0,
    itemCount: 0,
}

delete cart.customerName
cart.items = ["apples", "bananas", "cherries"]
cart.itemCount = 3
cart.totalPrice = 99.9

console.log(cart)