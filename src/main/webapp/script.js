document.addEventListener('DOMContentLoaded', function() {
    // Menu data with over 30 Indian food items
    const menuItems = [
        {
            id: 1,
            name: "Samosa",
            description: "Crispy pastry filled with spiced potatoes and peas",
            price: 60,
            category: "starters",
            image: "https://source.unsplash.com/random/300x200/?samosa"
        },
        {
            id: 2,
            name: "Paneer Tikka",
            description: "Grilled cottage cheese cubes marinated in spices",
            price: 220,
            category: "starters",
            image: "https://source.unsplash.com/random/300x200/?paneer-tikka"
        },
        {
            id: 3,
            name: "Chicken 65",
            description: "Spicy, deep-fried chicken appetizer",
            price: 280,
            category: "starters",
            image: "https://source.unsplash.com/random/300x200/?chicken-65"
        },
        {
            id: 4,
            name: "Vegetable Pakora",
            description: "Mixed vegetables dipped in chickpea batter and fried",
            price: 150,
            category: "starters",
            image: "https://source.unsplash.com/random/300x200/?pakora"
        },
        {
            id: 5,
            name: "Butter Chicken",
            description: "Tender chicken in a creamy tomato-based gravy",
            price: 320,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?butter-chicken"
        },
        {
            id: 6,
            name: "Palak Paneer",
            description: "Soft paneer cubes in a creamy spinach gravy",
            price: 260,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?palak-paneer"
        },
        {
            id: 7,
            name: "Chana Masala",
            description: "Chickpeas cooked in spicy onion-tomato gravy",
            price: 180,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?chana-masala"
        },
        {
            id: 8,
            name: "Rogan Josh",
            description: "Aromatic lamb curry from Kashmir",
            price: 350,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?rogan-josh"
        },
        {
            id: 9,
            name: "Dal Makhani",
            description: "Creamy black lentils slow-cooked with butter",
            price: 200,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?dal-makhani"
        },
        {
            id: 10,
            name: "Fish Curry",
            description: "Fish cooked in spicy coconut-based gravy",
            price: 300,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?fish-curry"
        },
        {
            id: 11,
            name: "Aloo Gobi",
            description: "Dry curry with potatoes and cauliflower",
            price: 190,
            category: "main-course",
            image: "https://source.unsplash.com/random/300x200/?aloo-gobi"
        },
        {
            id: 12,
            name: "Naan",
            description: "Soft leavened bread baked in tandoor",
            price: 50,
            category: "breads",
            image: "https://source.unsplash.com/random/300x200/?naan"
        },
        {
            id: 13,
            name: "Garlic Naan",
            description: "Naan topped with garlic and coriander",
            price: 70,
            category: "breads",
            image: "https://source.unsplash.com/random/300x200/?garlic-naan"
        },
        {
            id: 14,
            name: "Butter Naan",
            description: "Naan brushed with butter",
            price: 60,
            category: "breads",
            image: "https://source.unsplash.com/random/300x200/?butter-naan"
        },
        {
            id: 15,
            name: "Roti",
            description: "Whole wheat unleavened flatbread",
            price: 30,
            category: "breads",
            image: "https://source.unsplash.com/random/300x200/?roti"
        },
        {
            id: 16,
            name: "Paratha",
            description: "Layered flatbread pan-fried with ghee",
            price: 60,
            category: "breads",
            image: "https://source.unsplash.com/random/300x200/?paratha"
        },
        {
            id: 17,
            name: "Plain Rice",
            description: "Steamed basmati rice",
            price: 100,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?rice"
        },
        {
            id: 18,
            name: "Jeera Rice",
            description: "Basmati rice tempered with cumin seeds",
            price: 120,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?jeera-rice"
        },
        {
            id: 19,
            name: "Vegetable Biryani",
            description: "Fragrant rice cooked with mixed vegetables and spices",
            price: 220,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?vegetable-biryani"
        },
        {
            id: 20,
            name: "Chicken Biryani",
            description: "Aromatic rice with succulent chicken pieces",
            price: 280,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?chicken-biryani"
        },
        {
            id: 21,
            name: "Hyderabadi Biryani",
            description: "Spicy biryani with dum cooking technique",
            price: 300,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?hyderabadi-biryani"
        },
        {
            id: 22,
            name: "Mutton Biryani",
            description: "Fragrant rice with tender mutton pieces",
            price: 350,
            category: "rice",
            image: "https://source.unsplash.com/random/300x200/?mutton-biryani"
        },
        {
            id: 23,
            name: "Gulab Jamun",
            description: "Soft milk-solid balls soaked in sugar syrup",
            price: 90,
            category: "desserts",
            image: "https://source.unsplash.com/random/300x200/?gulab-jamun"
        },
        {
            id: 24,
            name: "Rasmalai",
            description: "Soft cheese patties in sweetened, thickened milk",
            price: 110,
            category: "desserts",
            image: "https://source.unsplash.com/random/300x200/?rasmalai"
        },
        {
            id: 25,
            name: "Kheer",
            description: "Rice pudding with nuts and cardamom",
            price: 80,
            category: "desserts",
            image: "https://source.unsplash.com/random/300x200/?kheer"
        },
        {
            id: 26,
            name: "Jalebi",
            description: "Crispy, syrupy swirls of fried batter",
            price: 70,
            category: "desserts",
            image: "https://source.unsplash.com/random/300x200/?jalebi"
        },
        {
            id: 27,
            name: "Gajar Halwa",
            description: "Carrot pudding with milk and dry fruits",
            price: 120,
            category: "desserts",
            image: "https://source.unsplash.com/random/300x200/?gajar-halwa"
        },
        {
            id: 28,
            name: "Mango Lassi",
            description: "Sweet yogurt drink with mango pulp",
            price: 90,
            category: "drinks",
            image: "https://source.unsplash.com/random/300x200/?mango-lassi"
        },
        {
            id: 29,
            name: "Masala Chai",
            description: "Spiced milk tea",
            price: 50,
            category: "drinks",
            image: "https://source.unsplash.com/random/300x200/?masala-chai"
        },
        {
            id: 30,
            name: "Nimbu Pani",
            description: "Refreshing lemonade with spices",
            price: 60,
            category: "drinks",
            image: "https://source.unsplash.com/random/300x200/?nimbu-pani"
        },
        {
            id: 31,
            name: "Badam Milk",
            description: "Sweet almond-flavored milk",
            price: 80,
            category: "drinks",
            image: "https://source.unsplash.com/random/300x200/?badam-milk"
        },
        {
            id: 32,
            name: "Thandai",
            description: "Traditional cold drink with nuts and spices",
            price: 100,
            category: "drinks",
            image: "https://source.unsplash.com/random/300x200/?thandai"
        }
    ];

    // DOM elements
    const menuContainer = document.querySelector('.menu-items');
    const categoryLinks = document.querySelectorAll('nav ul li a');
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.querySelector('.total-amount');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Cart state
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;

    // Initialize the app
    function init() {
        renderMenuItems(menuItems);
        updateCart();
        setupEventListeners();
    }

    // Render menu items
    function renderMenuItems(items) {
        menuContainer.innerHTML = '';
        
        items.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.className = 'menu-item';
            menuItemElement.dataset.category = item.category;
            
            menuItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-info">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-desc">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">₹${item.price}</span>
                        <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            
            menuContainer.appendChild(menuItemElement);
        });
    }

    // Filter menu by category
    function filterByCategory(category) {
        if (category === 'all') {
            renderMenuItems(menuItems);
            return;
        }
        
        const filteredItems = menuItems.filter(item => item.category === category);
        renderMenuItems(filteredItems);
    }

    // Add item to cart
    function addToCart(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        updateCart();
        saveCartToLocalStorage();
    }

    // Remove item from cart
    function removeFromCart(itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
        }
        
        updateCart();
        saveCartToLocalStorage();
    }

    // Update cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        totalAmount = 0;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            totalAmountElement.textContent = '₹0';
            return;
        }
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;
            
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-controls">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-price">₹${itemTotal}</div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        totalAmountElement.textContent = `₹${totalAmount}`;
    }

    // Save cart to localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Setup event listeners
    function setupEventListeners() {
        // Category filter
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                
                categoryLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                filterByCategory(category);
            });
        });
        
        // Add to cart
        menuContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const itemId = parseInt(e.target.dataset.id);
                addToCart(itemId);
                
                // Add animation to button
                e.target.textContent = 'Added!';
                e.target.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    e.target.textContent = 'Add to Cart';
                    e.target.style.backgroundColor = '#d1411e';
                }, 1000);
            }
        });
        
        // Cart controls
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('increase')) {
                const itemId = parseInt(e.target.dataset.id);
                addToCart(itemId);
            } else if (e.target.classList.contains('decrease')) {
                const itemId = parseInt(e.target.dataset.id);
                removeFromCart(itemId);
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty. Please add some items.');
                return;
            }
            
            alert(`Order placed successfully! Total: ₹${totalAmount}\nThank you for choosing Nresh's Restaurant!`);
            cart = [];
            updateCart();
            saveCartToLocalStorage();
        });
    }

    // Initialize the application
    init();
});
