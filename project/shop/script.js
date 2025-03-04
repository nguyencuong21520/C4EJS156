// Sample products data
const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/200' },
    // Add more products as needed
];

// DOM Elements
const authModal = document.getElementById('auth-modal');
const cartModal = document.getElementById('cart-modal');
const loginForm = document.querySelector('#login-form form');
const registerForm = document.querySelector('#register-form form');
const productsGrid = document.querySelector('.products-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.querySelector('#cart-total span');
const cartCount = document.getElementById('cart-count');

// Initialize cart
let cart = [];

// Display products
function displayProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price}</span>
        </div>
    `).join('');
    cartTotal.textContent = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Auth handlers
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserUI(user);
        authModal.style.display = 'none';
        this.reset();
    } else {
        alert('Invalid email or password!');
    }
});

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
        alert('Email already registered!');
        return;
    }

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    this.reset();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    alert('Registration successful! Please login.');
});

// UI Updates
function updateUserUI(user) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('register-btn').style.display = 'none';
    document.getElementById('user-welcome').style.display = 'inline';
    document.getElementById('user-name').textContent = user.fullName;
}

// Event Listeners
document.getElementById('cart-icon').addEventListener('click', () => {
    cartModal.style.display = 'block';
});

document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    authModal.style.display = 'block';
});

document.getElementById('register-btn').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    authModal.style.display = 'block';
});

document.getElementById('show-register').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('logout-btn').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    document.getElementById('login-btn').style.display = 'inline';
    document.getElementById('register-btn').style.display = 'inline';
    document.getElementById('user-welcome').style.display = 'none';
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        authModal.style.display = 'none';
        cartModal.style.display = 'none';
    });
});

// Initialize
displayProducts();

// Check if user is already logged in
const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    updateUserUI(JSON.parse(currentUser));
}