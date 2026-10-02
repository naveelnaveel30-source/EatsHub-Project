// Function to filter recipes based on category
function filterRecipes(category) {
    // Get all recipe cards
    const cards = document.querySelectorAll('.card');
    
    // Get all category buttons to update active state
    const buttons = document.querySelectorAll('.categories button');
    
    // Remove active class from all buttons and add it to the clicked one
    buttons.forEach(button => {
        button.classList.remove('active');
        // Match the button's text or onclick attribute to set active
        if (button.textContent.toLowerCase() === category.toLowerCase()) {
            button.classList.add('active');
        }
    });

    // Loop through cards and show/hide based on category
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to search recipes based on input
function searchRecipes() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const recipeName = card.getAttribute('data-name').toLowerCase();
        const recipeCategory = card.getAttribute('data-category').toLowerCase();
        
        // Check if the search query matches the recipe name or category
        if (recipeName.includes(searchInput) || recipeCategory.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Allow pressing "Enter" in the search box to trigger the search
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchRecipes();
    }
});

// Function to toggle favorite status (Heart icon)
function favorite(btn) {
    // Toggle a class 'liked' for styling purposes
    btn.classList.toggle('liked');
    
    // Change the heart icon filled/empty state
    if (btn.classList.contains('liked')) {
        btn.innerHTML = '♥️';
        btn.style.color = '#e74c3c'; // Red color for filled heart
    } else {
        btn.innerHTML = '♡';
        btn.style.color = 'inherit'; // Back to default color
    }
}