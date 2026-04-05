function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price
});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert("Product added to cart!");

}



function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("cart-items");

if(!container) return;

container.innerHTML = "";

let total = 0;


cart.forEach((item,index)=>{

total += item.price;

let div = document.createElement("div");

div.classList.add("cart-item");

div.innerHTML = `

<h3>${item.name}</h3>

<p>$${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

`;

container.appendChild(div);

});


let totalDiv = document.createElement("h2");

totalDiv.innerText = "Total: $" + total;

container.appendChild(totalDiv);

}



function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

loadCart();

updateCartCount();

}



function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = document.getElementById("cart-count");

if(count){

count.innerText = cart.length;

}

}



function checkoutWhatsApp(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){

alert("Your cart is empty!");

return;

}


let message = "Hello! I want to buy:\n\n";

let total = 0;


cart.forEach(item=>{

message += `${item.name} - $${item.price}\n`;

total += item.price;

});


message += `\nTotal: $${total}`;


let phone = "558994580139";


let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


window.open(url,"_blank");

}



loadCart();

updateCartCount();
