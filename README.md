# Bhooka 🍔

A minimal yet functional React application bootstrapped with Vite, designed for food ordering or restaurant listings. This repository provides a starting point for developers to quickly set up a React project with modern tooling and best practices.

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Core Workflow: Displaying Restaurant Listings](#core-workflow-displaying-restaurant-listings)
- [Body Component](#body-component)
- [RestaurantCard Component](#restaurantcard-component)
- [Summary](#summary)

---

## Overview

This React app is bootstrapped with Vite and serves as a foundation for building modern web applications related to food delivery or restaurant listings. It demonstrates state management, API integration, and component-based architecture.

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/InverseXenon/Bhooka-

# Navigate into the project directory
cd Bhooka-

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev


Repository Structure

Bhooka-/
├── public/
│   ├── index.html
│   └── ... (images, etc.)
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── FoodItems.jsx
│   │   ├── Footer.jsx
│   │   ├── InstaMangao.jsx
│   │   ├── Navbar.jsx
│   │   ├── RestaurantCard.jsx
│   │   └── Shimmer.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── RestaurantMenu.jsx
│   │   └── ... (other pages)
│   ├── utils/
│   │   ├── cartSlice.js
│   │   ├── constants.js
│   │   ├── helper.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

Prerequisites

Required Software:

Node.js v18+

npm or yarn

Code editor (VS Code, Sublime Text, etc.)

Knowledge Needed:

HTML, CSS, JavaScript basics

React components & JSX

State management concepts (optional, helpful for Redux Toolkit)

Basic command line usage

Getting Started

Clone the Repository:

git clone https://github.com/InverseXenon/Bhooka-


Navigate to Project Directory:

cd Bhooka-


Install Dependencies:

npm install


Start Development Server:

npm run dev


Explore the Code:
Open src/App.jsx and src/main.jsx to understand the structure.

Make Changes:
Edit files and save — the browser refreshes automatically.

Build for Production:

npm run build


Production-ready files are created in the dist folder.

Core Workflow: Displaying Restaurant Listings

User Opens App: Loads the website.

App Loads: App.jsx sets up structure and routing.

Routing: src/main.jsx routes the user to the Home component.

Home Renders: Displays Navbar and Body components.

Body Fetches Data: Calls API (Swiggy API in constants.js).

Restaurant Cards Render: RestaurantCard components display each restaurant.

Data Displayed: Shows name, image, cuisine, rating, delivery time, and cost.

