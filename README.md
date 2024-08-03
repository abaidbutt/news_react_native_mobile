# News App

Welcome to the News App! This project is designed to provide a seamless user experience for reading and interacting with news articles. Built with React Native and UI Kitten, this mobile application includes features such as user registration, social login, news browsing, and more.

## Features

- User Registration and Authentication
- Social Login (Google, Facebook)
- News Browsing
- Responsive and User-Friendly Interface
- Tailored for Women

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 12.x)
- npm or yarn
- React Native CLI
- Android Studio or Xcode (for iOS development)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abaidbutt/news_react_native_mobile.git
    cd news-app
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npx react-native start
    ```

2. Run the application on an Android or iOS emulator:

    ```bash
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

3. Open your emulator to see the application running.

## Project Structure

This project is structured to ensure modularity and scalability:

- **api/**: Contains API routes and handlers.
- **src/screens/**: React Native screens for different routes (e.g., SignIn, SignUp, Home, Contact, Notification, Settings, etc.).
- **assets/**: Static assets like images and icons.
- **styles/**: CSS and styling files.
- **components/**: Reusable React components.

### Key Pages

- **Home** (`Home.js`): Main news browsing page.
- **Sign Up** (`SignUp.js`): User registration page.
- **Sign In** (`SignIn.js`): User sign-in page.
- **Profile** (`Profile.js`): User profile management.
- **Contact** (`Contact.js`): Contact page.
- **Settings** (`Settings.js`): User settings page.
- **Notification** (`Notification.js`): User notifications.

## Code Snippet (Sign Up Page)

Here is a code snippet for the Sign Up page, demonstrating the use of UI Kitten components and React Native styling:

