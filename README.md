# Random User Profile Extension

A sleek, feature-rich Chrome browser extension built with Manifest V3 that generates random user profiles and allows viewing, filtering, and organizing them. The extension fetches real-looking synthetic data from the [Random User Generator API](https://randomuser.me/) and provides an interactive interface to browse through user cards.

## 🚀 Features

- **Random Data Fetching:** Fetches and displays 20 random user profiles at a time with skeleton loading animations while the data is being fetched.
- **Search & Filter:** 
  - Search users by their full name.
  - Filter profiles by Gender (Male/Female) and Nationalities (dynamically populated based on the fetched users).
- **Sorting Options:** Easily sort the currently loaded profiles by Name, Age, or Country.
- **Favorite Profiles:** Save user profiles to your "Favorites" tab. Favorites are persisted across sessions using your browser's local storage.
- **Detailed Modals:** Click "More" on any user card to view detailed information including their username, password, exact registration date, and phone numbers in a stylish modal.
- **Dashboard Stats:** See real-time statistics of the loaded users (Counts of Males, Females, and unique Countries).
- **Modern UI:** Responsive grid layout with a glassmorphism feel, smooth transitions, and pulse animations.

## 🛠️ Technology Stack

- **HTML5**
- **CSS3 (Vanilla)**: Flexbox, Grid, CSS Animations
- **JavaScript (ES6+)**: Fetch API, Local Storage, DOM Manipulation
- **Chrome Extension API**: Manifest V3

## 📁 Project Structure

```text
├── CodeBase/
│   ├── index.html    # The main UI of the extension's default popup.
│   ├── script.js     # Logic for fetching API, rendering cards, filtering, and local storage.
│   └── style.css     # Styling for grids, modals, skeletons, and the overall UI.
└── manifest.json     # Extension configuration file (Manifest V3).
```

## ⚙️ Installation Instructions

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/neev3654/Random-User-Profile-Extension.git
   ```
2. Open Google Chrome (or any Chromium-based browser like Edge, Brave).
3. Type `chrome://extensions/` in the URL bar and press Enter.
4. Turn on the **"Developer mode"** toggle switch in the top right corner.
5. Click the **"Load unpacked"** button that appears.
6. Select the folder containing the repository files (`Random-User-Profile-Extension`).
7. The extension should now be installed! You can pin it to your toolbar for easy access.

## 💡 How to Use

1. Click on the extension icon in your browser toolbar to open the popup.
2. Wait for the initial users to load.
3. Use the **Filters** button to toggle gender or nationality checkboxes.
4. Type in the **Search** box to find a specific person.
5. Use the **Sort** dropdown to organize the cards.
6. Click the **&hearts; (Heart)** icon on a user card to save them to your Favorites.
7. Switch to the **Favorites** tab to view your saved users.
8. Click **More** on any card for detailed contact information.
9. Click **Load More** at the bottom to fetch additional users.
