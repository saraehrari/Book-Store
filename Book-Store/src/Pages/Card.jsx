
import { use, useState } from "react";
import books from "../Data/Data";

export default function Card({ Books }) {
  const [quantity, setQuantity] = useState(1);
  const[remove, setRemove]= useState(remove)

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function Remove(){
    setRemove(remove.filter((Books)=> books.id !==id)  )
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {Books.map((b) => (
        <div key={b.id}>
          <h2>{b.title}</h2>
          <p>ID: {b.id}</p>
          <p>Author: {b.author}</p>
          <p>Price: ${b.price}</p>
          <p>Category: {b.category}</p>
          <img src={b.image} alt={b.title} width="150" />
          <p>{b.description}</p>

          <button onClick={increase}>Increase</button>

          <span> {quantity} </span>

          <button onClick={decrease}>Decrease</button>

          <button onClick={()=> Remove(b.id)}>Remove</button>
        </div>

      ))}

      <div className="card p-3">
  <h4>Order Summary</h4>
  <hr />

  <div className="d-flex justify-content-between">
    <span>Subtotal</span>
    <span>$43</span>
  </div>

  <div className="d-flex justify-content-between">
    <span>Delivery</span>
    <span>Free</span>
  </div>

  <hr />

  <div className="d-flex justify-content-between fw-bold">
    <span>Total</span>
    <span>$43</span>
  </div>

  <button className="btn btn-dark w-100 mt-3">
    Proceed to Checkout
  </button>
  
</div>
    </div>
  )};