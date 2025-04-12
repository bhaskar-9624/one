<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nresh's Restaurant - Authentic Indian Cuisine</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Nresh's Restaurant</h1>
            <p>Experience the taste of authentic Indian cuisine</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <ul>
                <li><a href="#" class="active" data-category="all">All Items</a></li>
                <li><a href="#" data-category="starters">Starters</a></li>
                <li><a href="#" data-category="main-course">Main Course</a></li>
                <li><a href="#" data-category="breads">Breads</a></li>
                <li><a href="#" data-category="rice">Rice & Biryani</a></li>
                <li><a href="#" data-category="desserts">Desserts</a></li>
                <li><a href="#" data-category="drinks">Drinks</a></li>
            </ul>
        </div>
    </nav>

    <div class="container main-content">
        <aside class="cart-sidebar">
            <h2>Your Order</h2>
            <div class="cart-items">
                <!-- Cart items will be added here dynamically -->
            </div>
            <div class="cart-total">
                <p>Total: <span class="total-amount">₹0</span></p>
                <button class="checkout-btn">Proceed to Checkout</button>
            </div>
        </aside>

        <main class="menu-items">
            <!-- Menu items will be added here dynamically -->
        </main>
    </div>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Nresh's Restaurant</h3>
                    <p>Bringing authentic Indian flavors to your table since 2010.</p>
                </div>
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 123 Spice Street, Food City</p>
                    <p><i class="fas fa-phone"></i> +91 9876543210</p>
                    <p><i class="fas fa-envelope"></i> info@Nreshsrestaurant.com</p>
                </div>
                <div class="footer-section">
                    <h3>Opening Hours</h3>
                    <p>Monday - Friday: 11:00 AM - 10:30 PM</p>
                    <p>Saturday - Sunday: 10:30 AM - 11:00 PM</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 Nresh's Restaurant. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
