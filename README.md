# Minimal E-Commerce Project

A minimal, modern e-commerce web application built with React, Redux Toolkit, Express.js, and Tailwind CSS.

## Features

- Product listing page with images, names, and prices
- Add to cart functionality with Redux state management
- Cart modal with quantity controls, subtotal, and total
- Checkout flow with backend integration
- Cart state persisted in localStorage
- Responsive, clean UI with Tailwind CSS
- Loading and error handling for product fetch

## Tech Stack

- **Frontend:** React.js (Vite), Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/Mayur244/E-Commerce.git
cd E-Commerce
```

### 2. Install dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

### 3. Start the backend server

```sh
cd ../backend
node server.js
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### 4. Start the frontend development server

```sh
cd ../frontend
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

### 5. Open the app

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## API Endpoints

- `GET /api/products` — Returns the list of products
- `POST /api/checkout` — Receives cart items and returns a success message

## Notes

- Make sure the backend is running before starting the frontend.
- The frontend expects the backend to be available at `/api/*` endpoints.
- Product images are HD Unsplash links for demo purposes.
