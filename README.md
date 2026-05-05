# 💰 Smart Dollar Store

A modern, responsive e-commerce demo application for a dollar store. Shop for products across multiple categories with a real-time cart that persists using browser localStorage.

## ✨ Features

- **Product Catalog**: Browse 8+ products across 4 categories (Food, Home, School, Toys)
- **Search & Filter**: Find products by name or category
- **Shopping Cart**: Add/remove items with real-time total calculation
- **Persistent Storage**: Cart data persists across browser sessions using localStorage
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Accessible**: Semantic HTML with ARIA labels for screen readers
- **Checkout**: Simple checkout workflow with order summary

## 🚀 Quick Start

### Option 1: View Live
The application is a single HTML page. Simply open `index.html` in your web browser.

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
dollar-store-demo/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── app.js             # Application logic and cart management
├── products.js        # Product catalog data
└── README.md          # This file
```

## 🎯 How It Works

### 1. **Browse Products**
- View all products in a responsive grid
- Use the search bar to find specific items
- Filter by category (Food, Home, School, Toys)

### 2. **Shopping Cart**
- Click "Add to Cart" on any product
- Adjust quantities using +/- buttons
- Cart total updates in real-time
- Cart persists even if you close the browser

### 3. **Checkout**
- Click "Checkout" to place your order
- View order summary with item count and total
- Cart clears after successful checkout

## 💻 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Grid layout, flexbox, responsive design
- **Vanilla JavaScript**: No frameworks or dependencies
- **localStorage API**: Persistent cart storage

## 🎨 Customization

### Change Product Colors
Edit the color variables in `styles.css`:
```css
:root {
    --primary-color: #1e7e34;    /* Main green */
    --primary-dark: #145c25;     /* Dark green */
    --primary-light: #2a9d44;    /* Light green */
}
```

### Add New Products
Edit `products.js` and add to the products array:
```javascript
{ 
    id: 9, 
    name: "Product Name", 
    price: 2, 
    category: "food", 
    img: "https://picsum.photos/200?9",
    description: "Product description"
}
```

### Add New Categories
1. Add category to products in `products.js`
2. Add category option to select in `index.html`
3. Update styles if needed in `styles.css`

## 📊 Cart Data Format

Cart data is stored in localStorage as JSON:
```json
{
  "1": 2,
  "3": 1,
  "5": 3
}
```
Where the key is the product ID and the value is the quantity.

## 🐛 Known Issues & Future Improvements

See [Issues](https://github.com/braithwaitechristian/dollar-store-demo/issues) for:
- Enhanced notifications/toast system
- Product images optimization
- Tax calculation
- Coupon codes
- User accounts and order history
- Payment integration

## 📝 Development

### Code Quality
- Clean, well-documented JavaScript
- Responsive CSS with mobile-first approach
- Accessible HTML with semantic elements

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

Created by [@braithwaitechristian](https://github.com/braithwaitechristian)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

**Made with ❤️ for the Open Source Community**
