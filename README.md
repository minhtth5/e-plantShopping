# 🌿 The Paradise Nursery Shopping Cart

The **Paradise Nursery Shopping Cart** is a modern React application built using **Vite**, **Redux Toolkit**, and **React Router**.

This project simulates an online plant shop where users can browse house plants, add them to a shopping cart, manage quantities, and proceed to checkout.

---

## 🚀 Live Features

### 🏠 Landing Page

* Beautiful split-screen layout
* Half-screen plant image
* "Shop Now" button that navigates to the product page

### 🌱 Product Listing Page

* Plants grouped into categories:

  * Aromatic Plants
  * Medicinal Plants
* Each plant displayed in a styled card showing:

  * Image
  * Name
  * Description
  * Price
  * Add to Cart button

### 🛒 Shopping Cart Page

* Displays all selected plants
* Each cart item includes:

  * Thumbnail image
  * Unit price
  * Total price per item
  * Increase quantity button
  * Decrease quantity button
  * Delete button
* Cart total calculation
* Continue Shopping button
* Checkout button

---

## 🛠 Technologies Used

* React (Functional Components)
* Vite (Fast development build tool)
* Redux Toolkit (State management)
* React Redux
* React Router DOM
* CSS (Custom styling)
* JavaScript (ES6+)

---

## 🧠 Concepts Implemented

### ✅ React Concepts

* Functional components
* Component composition and nesting
* Props
* Conditional rendering
* Event handling
* Dynamic rendering using `map()`
* useState hook
* useEffect hook

### ✅ Redux Concepts

* Store configuration
* Slice creation
* Actions
* Reducers
* useDispatch
* useSelector

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── PlantCard.jsx
│   └── CartItem.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Products.jsx
│   └── Cart.jsx
│
├── redux/
│   └── cartSlice.js
│
├── store/
│   └── store.js
│
├── data/
│   └── plants.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/minhtth5/e-plantShopping
cd paradise-nursery
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173/
```

---

## 🛍 How the Cart Works

* Clicking **Add to Cart** dispatches an action to Redux.
* If the item already exists in the cart, the quantity increases.
* Quantity buttons (+ / -) update the Redux store.
* The cart total dynamically recalculates based on item quantities.
* The cart badge in the navbar updates automatically using Redux state.

---

## 🎨 UI Features

* Half-screen landing image
* Modern card-based design
* Responsive flexbox layout
* Styled navigation bar
* Clean cart layout with shadow effects

---

## 🔮 Future Improvements

* Persist cart using localStorage
* Add product search functionality
* Add filtering options
* Implement user authentication
* Add checkout confirmation modal
* Improve mobile responsiveness
* Add animations and transitions

---

## 🎓 Learning Outcomes

By completing this project, you demonstrate understanding of:

* React application structure
* Component-based architecture
* State management using Redux
* Handling user interactions
* Rendering dynamic data
* Styling React applications

---

## 👩‍💻 Author

Developed as part of a React + Redux learning project.

---

## 📄 License

This project is for educational purposes.

---

🌿 *Bringing nature closer to your home.*
