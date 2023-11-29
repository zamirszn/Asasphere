// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Function to handle card click
function handleCardClick(event) {
    // Remove 'selected' class from all product cards
    productCards.forEach(card => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the clicked product card
    event.currentTarget.classList.add('selected');
}

// Attach click event listener to each product card
productCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-list').classList.toggle('show');
}); // Get the menu button and navigation list
const menuButton = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Toggle mobile navigation menu
menuButton.addEventListener('click', function () {
    navList.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function() {
        // This function will be executed when the DOM is fully loaded
        alert('Welcome to Asasphere Innovation! Explore our wide range of products and find the best deals.');
    });
function expandSearch() {
    const searchInput = document.querySelector('.search-input');
    const isExpanded = searchInput.style.width === '200px';

    if (isExpanded) {
        searchInput.style.width = '40px';
    } else {
        searchInput.style.width = '200px';
    }
}