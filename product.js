let productData;
const getAllProductData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');
    const subCategory = urlParams.get('subCategory');
    const currentPath = window.location.pathname;
    if (!category && !subCategory) {
        try {
            const response = await fetch("https://ecommerce-1l4p.onrender.com/products");
            productData = await response.json();
            console.log(productData);
            showData(productData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        const response = await fetch(`https://ecommerce-1l4p.onrender.com/product/subcategory?category=${category}&subCategory=${subCategory}`);
        productData = await response.json();
        console.log("data...", productData);
        showData(productData);
    }
};
// getAllProductData();
document.addEventListener('DOMContentLoaded', getAllProductData())
const searchData = async () => {
    const input = document.getElementById("searchInput").value;
    window.location.href = `/product.html?category=${input}&subCategory=All product`;
};
async function slider() {
    const response = await fetch("https://ecommerce-1l4p.onrender.com/products");
    const productContainer = document.getElementById('slides');
    console.log("product", productContainer);
    let data = await response.json();
    console.log(data);
    data.forEach((product) => {
        console.log(product);
        const slides = document.createElement('div')
        const proCard = document.createElement('div');
        proCard.classList.add('procard');
        proCard.setAttribute("id", "sliderCart")
        slides.classList.add('slide');
        const img = document.createElement('img');
        img.src = product.imgurl;
        img.alt = '';
        const title = document.createElement('h3');
        title.textContent = product.name;
        const price = document.createElement('h4');
        price.textContent = `$ ${product.price}`;
        const description = document.createElement('p');
        description.textContent = product.discription;
        const addToCartBtn = document.createElement('button');
        addToCartBtn.setAttribute('onclick', `addToCart('${product._id}')`);
        addToCartBtn.setAttribute('type', 'button');
        addToCartBtn.textContent = 'Add To Cart';
        proCard.appendChild(img);
        proCard.appendChild(title);
        proCard.appendChild(price);
        proCard.appendChild(description);
        proCard.appendChild(addToCartBtn);
        slides.appendChild(proCard)
        productContainer.appendChild(slides);
    });
}
document.addEventListener('DOMContentLoaded', slider())
// show product cart in product page
function showData(data) {
    const productContainer = document.getElementById('product-container');
    data.forEach((product) => {
        // console.log(product);
        const slide = document.querySelector('.slide');
        const proCard = document.createElement('div');
        proCard.classList.add('procard');
        const img = document.createElement('img');
        img.src = product.imgurl;
        img.alt = '';
        const title = document.createElement('h3');
        title.textContent = product.name;
        const price = document.createElement('h4');
        price.textContent = `$ ${product.price}`;
        const description = document.createElement('p');
        description.textContent = product.discription;
        const addToCartBtn = document.createElement('button');
        addToCartBtn.setAttribute('onclick', `addToCart('${product._id}')`);
        addToCartBtn.setAttribute('type', 'button');
        addToCartBtn.textContent = 'Add To Cart';
        proCard.appendChild(img);
        proCard.appendChild(title);
        proCard.appendChild(price);
        proCard.appendChild(description);
        proCard.appendChild(addToCartBtn);
        productContainer.appendChild(proCard);
    });
}
// =================================================================================
// add product in  cart
const cart = [];
let carts = localStorage.getItem("product")
carts = JSON.parse(carts)

function addToCart(productId) {
    const product = productData.find(prod => prod._id === productId);
    if (!product) return;
    let updatedCart = [...carts]; // Copy the existing cart to a new array
    const existingCartItem = updatedCart.find(item => item._id === productId);
    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        updatedCart.push({
            ...product,
            quantity: 1
        });
    }
    localStorage.setItem('product', JSON.stringify(updatedCart));
    window.location.reload();
}
// Function to remove item from cart
function removeFromCart(productId) {
    const itemIndex = carts.filter(item => item._id != productId);
    localStorage.setItem('product', JSON.stringify(itemIndex));
    window.location.reload();
}
// Function to increment quantity in cart
function incrementQuantity(productId) {
    const item = carts.map((item) => {
        if (item._id === productId) {
            item.quantity++;
        }
        return item
    });
    localStorage.setItem('product', JSON.stringify(item));
    window.location.reload();
}
// Function to decrement quantity in cart
function decrementQuantity(productId) {
    const item = carts.map((item) => {
        if (item._id === productId) {
            (item.quantity > 1) ? item.quantity--: item.quantity = 1;
        }
        return item
    });
    localStorage.setItem('product', JSON.stringify(item));
    window.location.reload();
}
// Function to calculate total price in cart
function getTotal() {
    let carts = localStorage.getItem("product");
    carts = JSON.parse(carts);
    let shoppingCharge = document.getElementById("soppingCharge").innerText;
    let shoppingChargeValue = parseInt(shoppingCharge.replace("$", ""));
    let totalPrice = carts.reduce((total, item) => {
        let productPrice = item.price * item.quantity;
        return total + productPrice;
    }, 0);
    let productTotalElement = document.getElementById("product-total");
    let totalElement = document.getElementById("total");
    productTotalElement.innerText = `$ ${totalPrice}`;
    totalElement.innerText = `$ ${totalPrice + shoppingChargeValue}`;
}
getTotal();
// Function to display cart items 
function showCart(cart) {
    const cartItems = document.getElementById('cart-items');
    console.log("vbb", cart);
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
    <div class="card-info">
    <img src="${item.imgurl}" alt="">
    <div class="product-name-price">
      <p id="name">${item.name}</p>
      <p id="price">${item.price}</p>
      <i id="remove" class="fa-solid fa-trash" onclick="removeFromCart('${item._id}')"></i>
    </div>
    <div class="Qty-group">
      <button onclick="incrementQuantity('${item._id}')">
        <i class="fa-solid fa-plus"></i>
      </button>
      <input type="text" value="${item.quantity}" >
      <button onclick="decrementQuantity('${item._id}')">
        <i class="fa-solid fa-minus"></i>
      </button>
      <div></div>
    </div>
  </div>
    `;
        cartItems.appendChild(cartItem);
    });
}
showCart(carts);