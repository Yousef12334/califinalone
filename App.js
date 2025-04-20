
import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Puff XTRA Grape Ice", price: 6.75, stock: 122 },
  { id: 2, name: "Elf Bar Strawberry", price: 8.50, stock: 0 },
  { id: 3, name: "BIC Lighters", price: 0.89, stock: 942 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [file, setFile] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheckout = () => {
    alert("Order submitted with permit: " + (file ? file.name : "None"));
  };

  return (
    <div className="App">
      <h1>CALI SUNRISE Ordering App</h1>
      <h2>Inventory</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} ({p.stock} in stock)
            {p.stock > 0 ? (
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            ) : (
              <span> Out of Stock</span>
            )}
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>

      <h3>Upload Seller's Permit</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleCheckout}>Submit Order</button>
    </div>
  );
}

export default App;
