# 🛒 Full Stack eCommerce Website (MERN Stack)

This is a full-featured **eCommerce website** built with the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js. The project includes both frontend and backend development, user and admin functionality, and payment integrations. After development, the app is deployed online using **Vercel**.

## 🚀 Features

### 👤 User Functionality
- Browse and explore products
- Filter and sort products
- View product details with variant selection (e.g., size)
- Add products to cart
- Place orders by providing a delivery address
- Choose payment method: **Cash on Delivery**, **Stripe**, or **Razorpay**
- Online payment and order confirmation

### 🛠️ Admin Dashboard
- Upload and manage products
- Delete products
- View all products in the store
- Monitor and manage user orders

## 🧱 Tech Stack

### Frontend
- **React.js**
- **CSS / Tailwind / Bootstrap** (depending on styling choice)
- **Axios** (for API calls)
- **Redux / Context API** (for state management, if used)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Stripe & Razorpay SDKs** (for payment gateways)

### Deployment
- **Frontend** deployed on [Vercel](https://vercel.com)
- **Backend** can be hosted on **Render**, **Railway**, or **MongoDB Atlas** for DB

## 📦 API Features

- **User Routes**: registration, login, cart, orders
- **Product Routes**: create, read, update, delete (CRUD)
- **Order Routes**: create order, get user/admin orders
- **Payment Integration**: Stripe & Razorpay webhooks and payment verification

## 📁 Folder Structure (Basic)

```plaintext
ecommerce-app/
│
├── client/                # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
├── server/                # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md


