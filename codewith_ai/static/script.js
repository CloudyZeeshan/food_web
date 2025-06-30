
// Menu items data
const menuItems = [
    {
        name: "Classic Burger",
        description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
    },
    {
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomatoes, and basil on our homemade crust",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800"
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan cheese, and homemade croutons",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800"
    },
    {
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with lemon herb butter",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800"
    },
    {
        name: "Pasta Carbonara",
        description: "Creamy pasta with pancetta and fresh parmesan",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800"
    },
    {
        name: "Chocolate Cake",
        description: "Rich chocolate cake with ganache frosting",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
    }
];

// Function to create menu items
function createMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the website
function init() {
    createMenuItems();
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
