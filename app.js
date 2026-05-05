/**
 * Smart Dollar Store - Main Application Logic
 * Handles product rendering, cart management, and shopping functionality
 */

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || {};

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

/**
 * Update cart summary in header
 */
function updateCartUI() {
    const itemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    document.getElementById("itemCount").textContent = itemCount;
}

/**
 * Render products based on search and category filters
 */
function renderProducts() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const selectedCategory = document.getElementById("category").value;

    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const filteredProducts = products.filter(product => 
        (selectedCategory === "all" || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(searchTerm) || 
         product.description.toLowerCase().includes(searchTerm))
    );

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No products found</div>';
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

/**
 * Add product to cart or increment quantity
 * @param {number} productId - The product ID to add
 */
function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    saveCart();
    showNotification(`Added to cart!`);
}

/**
 * Change cart item quantity
 * @param {number} productId - The product ID
 * @param {number} delta - Amount to change (positive or negative)
 */
function changeQty(productId, delta) {
    cart[productId] = (cart[productId] || 0) + delta;
    
    if (cart[productId] <= 0) {
        delete cart[productId];
    }
    
    saveCart();
}

/**
 * Render shopping cart
 */
function renderCart() {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";

    let total = 0;
    let itemCount = 0;

    const cartIds = Object.keys(cart);

    if (cartIds.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById("total").textContent = "0.00";
        document.getElementById("itemCount").textContent = "0";
        return;
    }

    cartIds.forEach(productId => {
        const product = products.find(p => p.id == productId);
        const quantity = cart[productId];

        if (!product) return;

        const subtotal = product.price * quantity;
        total += subtotal;
        itemCount += quantity;

        const cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";
        cartItemElement.innerHTML = `
            <div class="cart-item-name">${product.name}</div>
            <div>$${product.price.toFixed(2)} × ${quantity} = $${subtotal.toFixed(2)}</div>
            <div class="cart-item-controls">
                <button onclick="changeQty(${productId}, -1)">−</button>
                <span style="flex: 1; display: flex; align-items: center; justify-content: center;">${quantity}</span>
                <button onclick="changeQty(${productId}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(cartItemElement);
    });

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("itemCount").textContent = itemCount;

    // Update button states
    const checkoutBtn = document.getElementById("checkoutBtn");
    checkoutBtn.disabled = itemCount === 0;
}

/**
 * Clear all items from cart
 */
function clearCart() {
    if (Object.keys(cart).length === 0) {
        showNotification("Cart is already empty");
        return;
    }

    if (confirm("Are you sure you want to clear your cart?")) {
        cart = {};
        saveCart();
        showNotification("Cart cleared");
    }
}

/**
 * Proceed to checkout
 */
function checkout() {
    const itemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    const total = document.getElementById("total").textContent;

    if (itemCount === 0) {
        showNotification("Your cart is empty", "warning");
        return;
    }

    const summary = `You're purchasing ${itemCount} item(s) for $${total}.\n\nThank you for shopping at Smart Dollar Store!`;
    alert(summary);

    // Clear cart after checkout
    cart = {};
    saveCart();
    showNotification("Order placed successfully!");
}

/**
 * Show temporary notification
 * @param {string} message - The notification message
 * @param {string} type - Type of notification (default: 'success')
 */
function showNotification(message, type = 'success') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Could be enhanced with a toast notification library
}

/**
 * Initialize app
 */
function initApp() {
    renderProducts();
    renderCart();
    updateCartUI();
}

// Start the app when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
