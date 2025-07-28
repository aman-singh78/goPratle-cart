# 🛍️ Product Listing App

A responsive product listing web app built with **React**, **Redux**, and **Tailwind CSS**. Features include product browsing, real-time search filtering, and cart integration with global state management.

---

## 🚀 Features

- 🔍 **Search Products** in real-time by title.
- 🖼️ **Responsive Product Grid** layout.
- 🛒 **Add to Cart** button dispatches a Redux action.
- 📦 **Global Cart Count** visible in the navbar.
- 🌐 **Products Fetched** from public API (dummyjson).

---

## 🛠️ Tech Stack

- **React** (Functional components + Hooks)
- **Redux Toolkit** (for global product/cart state)
- **Tailwind CSS** (for UI styling)
- **ESLint** (with React rules)
- **DummyJSON API** for product data

---

## 📁 Folder Structure

src/
├── components/
│ ├── ProductCard.jsx
│ └── SearchBar.jsx
├── pages/
│ └── ProductListPage.jsx
├── redux/
│ ├── store.js
│ ├── productSlice.js
│ └── cartSlice.js
├── constants/
│ └── api.js
└── App.jsx

## 🔧 Setup Instructions

1. **Clone the repo**:
   `

   - git clone https://github.com/your-username/product-listing-app.git
   - cd product-listing-app

2. **Install dependencies**:

   - npm install

3. **Start the dev server**:

   - npm run dev

4. - Open http://localhost:5173 in your browser.

## 🌐 API Source

- Products are fetched from:
- https://dummyjson.com/products

## Future Improvements

- Add cart page with full cart management (quantity, remove).

- Add product detail page with route navigation.

- Persist cart state using localStorage.

- Add user authentication.
