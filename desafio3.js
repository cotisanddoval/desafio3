async function getCarts() {
    const res = await fetch("https://dummyjson.com/carts")
    const json = await res.json()
    return json.carts
}

async function getUsers() {
    const res = await fetch("https://dummyjson.com/users")
    const json = await res.json()
    return json.users
}



async function getProduct() {
    const res = await fetch("https://dummyjson.com/products")
    const json = await res.json()
    return json.products
}

async function getCartById(userId) {
    const res = await fetch("https://dummyjson.com/comments/post/" + userId)
    const json = await res.json()
    return json.carts

}

async function imprimirCart() {
    const cart = await getCarts()
    
    const cartDetail = {
        title: cart.title,
        price: cart.price,
        quantity: cart.quantity,
    }

    console.log(cartDetail)
}

for (let i = 0; i < 5; i++) {
    imprimirCart(i)
}