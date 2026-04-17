
// This JavaScript code creates a web app that displays random user profiles.
// It fetches user data from an API, allows filtering by gender and nationality,
// searching by name, sorting, and favoriting users.
// Users can view more details in a modal popup.

// Get references to HTML elements
const filterToggle = document.getElementById('filter-toggle');
const filtersDropdown = document.getElementById('filters-dropdown');
const regenerateBtn = document.getElementById('regenerate-btn');
const cardsContainer = document.getElementById('cards-container');
const allTab = document.getElementById('all-tab');
const favoritesTab = document.getElementById('favorites-tab');
const maleCheckbox = document.getElementById('male-checkbox');
const femaleCheckbox = document.getElementById('female-checkbox');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const loadMoreBtn = document.getElementById('load-more-btn');

// Arrays to store user data and favorites
let users = []; // All loaded users
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Favorite users from local storage
let currentTab = 'all'; // Current active tab: 'all' or 'favorites'
let natCheckboxes = []; // Checkboxes for nationalities

// Function to load users from the API
function loadUsers(append = false) {
    // Show loading indicator and hide error message
    const loading = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    loading.style.display = 'block';
    errorDiv.style.display = 'none';

    // Fetch 20 random users from the API
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data for debugging
            // Add new users to the existing list or replace it
            if (append) {
                users = users.concat(data.results);
            } else {
                users = data.results;
            }
            // Update nationality filters and render the cards
            populateNationalities();
            renderCards();
            // Hide loading indicator
            loading.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            // Hide loading and show error
            loading.style.display = 'none';
            errorDiv.style.display = 'block';
        });
}

// Function to create checkboxes for each unique nationality
function populateNationalities() {
    // Get unique nationalities from users
    const uniqueNats = [...new Set(users.map(u => u.nat))];
    const natContainer = document.getElementById('nationality-checkboxes');
    // Clear previous checkboxes and add header
    natContainer.innerHTML = '<h4>Countries</h4>';
    // Create a checkbox for each nationality
    uniqueNats.forEach(nat => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${nat}" class="nat-checkbox"> ${nat}`;
        natContainer.appendChild(label);
    });
    // Get all nationality checkboxes and add event listeners
    natCheckboxes = document.querySelectorAll('.nat-checkbox');
    natCheckboxes.forEach(cb => cb.addEventListener('change', renderCards));
}

// Function to apply filters to a list of users
function applyFilters(sourceUsers) {
    let filtered = sourceUsers;
    // Filter by gender
    const selectedGenders = [];
    if (maleCheckbox.checked) selectedGenders.push('male');
    if (femaleCheckbox.checked) selectedGenders.push('female');
    if (selectedGenders.length > 0) {
        filtered = filtered.filter(u => selectedGenders.includes(u.gender));
    }
    // Filter by nationality
    const selectedNats = Array.from(natCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selectedNats.length > 0) {
        filtered = filtered.filter(u => selectedNats.includes(u.nat));
    }
    // Filter by search term in name
    const search = searchInput.value.toLowerCase();
    if (search) {
        filtered = filtered.filter(u => `${u.name.first} ${u.name.last}`.toLowerCase().includes(search));
    }
    return filtered;
}

// Function to sort users based on selected option
function applySort(users) {
    const sortBy = sortSelect.value;
    return users.sort((a, b) => {
        if (sortBy === 'name') return a.name.first.localeCompare(b.name.first);
        if (sortBy === 'age') return a.dob.age - b.dob.age;
        if (sortBy === 'country') return a.location.country.localeCompare(b.location.country);
        return 0; // No sorting
    });
}

// Function to render user cards on the page
function renderCards() {
    // Clear the cards container
    cardsContainer.innerHTML = '';
    // Get users based on current tab
    const sourceUsers = currentTab === 'all' ? users : favorites;
    // Apply filters and sorting
    const filteredUsers = applyFilters(sourceUsers);
    const sortedUsers = applySort(filteredUsers);
    // Create a card for each user
    sortedUsers.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        // Check if user is favorited
        const isFavorite = favorites.some(fav => fav.login.uuid === user.login.uuid);
        // Set the card's HTML content
        card.innerHTML = `
            <button class="heart ${isFavorite ? 'favorited' : ''}">&hearts;</button>
            <img src="${user.picture.large}" alt="Avatar">
            <div class="info">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>Age: ${user.dob.age}</p>
            </div>
            <button class="more-btn">More</button>
        `;
        // Add event listeners for heart and more buttons
        card.querySelector('.heart').addEventListener('click', () => toggleFavorite(user));
        card.querySelector('.more-btn').addEventListener('click', () => showModal(user));
        // Add the card to the container
        cardsContainer.appendChild(card);
    });
    // Update statistics and show/hide load more button
    updateStats(sortedUsers);
    loadMoreBtn.style.display = (currentTab === 'all' && users.length >= 20) ? 'block' : 'none';
}

// Function to show user details in a modal
function showModal(user) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    // Set modal content with user details
    modalDetails.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <p><strong>Username:</strong> ${user.login.username}</p>
        <p><strong>Password:</strong> ${user.login.password}</p>
        <p><strong>Registered:</strong> ${new Date(user.registered.date).toLocaleDateString()}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Cell:</strong> ${user.cell}</p>
    `;
    // Show the modal
    modal.style.display = 'block';
}

// Function to update the statistics display
function updateStats(displayedUsers) {
    const maleCount = displayedUsers.filter(u => u.gender === 'male').length;
    const femaleCount = displayedUsers.filter(u => u.gender === 'female').length;
    const countryCount = new Set(displayedUsers.map(u => u.location.country)).size;
    // Update the text content of stats elements
    document.getElementById('male-count').textContent = `Males: ${maleCount}`;
    document.getElementById('female-count').textContent = `Females: ${femaleCount}`;
    document.getElementById('country-count').textContent = `Countries: ${countryCount}`;
}

// Function to toggle a user's favorite status
function toggleFavorite(user) {
    // Find the index of the user in favorites
    const index = favorites.findIndex(fav => fav.login.uuid === user.login.uuid);
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
    } else {
        // Add to favorites
        favorites.push(user);
    }
    // Save to local storage and re-render cards
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderCards();
}

// Event listeners for tab switching
allTab.addEventListener('click', () => {
    currentTab = 'all';
    allTab.classList.add('active');
    favoritesTab.classList.remove('active');
    renderCards();
});

favoritesTab.addEventListener('click', () => {
    currentTab = 'favorites';
    favoritesTab.classList.add('active');
    allTab.classList.remove('active');
    renderCards();
});

// Event listeners for filters
maleCheckbox.addEventListener('change', renderCards);
femaleCheckbox.addEventListener('change', renderCards);
searchInput.addEventListener('input', renderCards);
sortSelect.addEventListener('change', renderCards);

// Event listener for regenerate button
regenerateBtn.addEventListener('click', () => loadUsers(false));

// Event listener for load more button
loadMoreBtn.addEventListener('click', () => loadUsers(true));

// Event listener for filter toggle
filterToggle.addEventListener('click', function() {
    // Toggle the display of the filters dropdown
    if (filtersDropdown.style.display === 'none' || filtersDropdown.style.display === '') {
        filtersDropdown.style.display = 'block';
    } else {
        filtersDropdown.style.display = 'none';
    }
});

// Event listener to close modal when clicking close button
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Event listener to close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Load initial users when the page loads
loadUsers();