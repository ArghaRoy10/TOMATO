# Food Delivery Website

A robust MERN stack food delivery website with integrated payment system, real-time updates, and comprehensive admin and user functionalities.
![Screenshot 2024-07-04 130504](https://github.com/ArghaRoy10/TOMATO/assets/135490193/cfc64a34-3b1e-4394-a799-c0c8b54de53c)


## Features

- **Seamless Payment Integration:**
  - Utilize Stripe for secure and efficient payment processing.
  - Supports various payment methods to ensure a smooth checkout experience.

- **Comprehensive Admin Panel:**
  - **Food Management:** Easily add, update, and delete food items along with their categories and prices.
  - **Order Management:** View a list of all orders, update their status in real-time, and ensure smooth order tracking.
  - **Real-Time Updates:** All changes made by the admin are instantly reflected in the database and visible to users.

- **User Authentication:**
  - **Secure Login & Registration:** Users can create accounts, log in, and log out securely.
  - **Order Placement:** Authenticated users can place orders, view order history, and track order statuses in real-time.
  
## Technologies Used

- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Express.js:** Backend framework for building RESTful APIs.
- **React.js:** Frontend library for building user interfaces.
- **Node.js:** JavaScript runtime for server-side development.
- **Stripe:** Payment processing platform for handling transactions.

## Installation

1. Clone the repository: git clone https://github.com/ArghaRoy10/TOMATO.git
2. Install server and client dependencies: npm run server
3. Set up your environment variables: MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
4. Start the server: npm run server
5. Start the frontend: npm run dev

## Usage
- Access the admin panel at http://localhost:5174 to manage food items, categories, prices, view orders, and update order statuses.
- Users can register, log in, and place orders on the main page.
![WhatsApp Image 2024-07-04 at 13 17 29_dfd766cb](https://github.com/ArghaRoy10/TOMATO/assets/135490193/4ddd465b-09df-4f38-82d9-e8846562bdd2)

## License
This project is licensed under the MIT License. 
