
import React, { useState } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 25000 },
    { id: 2, name: "Mobile", price: 10000 },
    { id: 3, name: "Camera", price: 15000 }
  ]);

  const [bids, setBids] = useState({});
  const [message, setMessage] = useState({});

  function placeBid(product) {
    let amount = Number(bids[product.id]);

    if (!amount || amount <= product.price) {
      setMessage({
        ...message,
        [product.id]: "Enter a higher bid!"
      });
      return;
    }

    setProducts(products.map(p =>
      p.id === product.id
        ? { ...p, price: amount }
        : p
    ));

    setMessage({
      ...message,
      [product.id]: "Bid placed successfully!"
    });

    setBids({ ...bids, [product.id]: "" });
  }

  return (
    <div className="app">

      <h1>Online Auction System</h1>
      <p>Buy and Bid Your Favourite Products</p>

      <div className="container">

        {products.map(product => (

          <div className="card" key={product.id}>

            <h2>{product.name}</h2>

            <h3>Current Bid: ₹{product.price}</h3>

            <input
              type="number"
              placeholder="Enter your bid"
              value={bids[product.id] || ""}
              onChange={(e) =>
                setBids({
                  ...bids,
                  [product.id]: e.target.value
                })
              }
            />

            <button onClick={() => placeBid(product)}>
              Place Bid
            </button>

            <p>{message[product.id]}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
