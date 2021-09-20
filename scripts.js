import data from './data.js'

const itemsContainer = document.querySelector('#items');
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')


// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	//console.log(img) // Check the console!
	itemsContainer.appendChild(newDiv)

    const desc = document.createElement('P')
    desc.innerText = data[i].desc
    //console.log(data[i].desc)
    newDiv.appendChild(desc)
    const price = document.createElement('p')
    price.innerHTML = data[i].price
    newDiv.appendChild(price)
    //stretch goal: use forEach

    const button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = 'Add to Cart'
    newDiv.appendChild(button)
}

const cart = []
const obj = {}

function addItem(name, price){
    for (let i=0; i< cart.length; i +=1) {
        if (name === cart[i].name) {
            cart[i].qty += 1
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)    
}

function getQty () {
    let qty = 0
    for (let i = 0; i< cart.length; i +=1 ) {
        qty += cart[i].qty
    }
    return qty

 }

function getTotal () {
    let total = 0
    for (let i = 0; i< cart.length; i +=1 ) {
        total += cart[i].qty * cart[i].price
    }
    return total.toFixed(2)
}

function showItems(){

    cartQty.innerHTML = `You have ${getQty()} items in your cart`

    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        //console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty
        const {name, price, qty} = cart[i]
        itemStr += `<li> 
            ${name} 
            ${price} x ${qty} = 
            $${qty * price}</li>`

    }
    let total = 0
    for (let i = 0; i< cart.length; i +=1 ) {
        total += cart[i].qty * cart[i].price
    }
    cartTotal.innerHTML = `total in cart: $${getTotal()}`

    itemList.innerHTML = itemStr
}

function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (name === cart[i].name){
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty < 1 || qty === 0){
                cart.splice(i, 1)
            }
            return
        }
    }
}

addItem('happiness', 0.99);
addItem('happiness', 0.99);
addItem('moody', 0.99);
removeItem('happiness')
showItems()