import data from './data.js'

const itemsContainer = document.querySelector('#items');

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
    const item = {name: name, price: price, qty: 1}
    cart.push(item)
}
function showItems(){
    console.log(cart)
}

addItem('happiness', 0.99);
showItems()