import React, { useState } from "react";
import { CardItem } from "../components/CardItem";
import Button from "react-bootstrap/Button";

export default function Cart({ eventList, handleRemove }) {
  const [cartItems, setCartItems] = useState([eventList]);
  console.log("my_events", eventList);

  const [count, setCount] = useState(0); // Default count value is 1
  const [totalPrice, setTotalPrice] = useState(0);

  // const handleAddToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    handleRemove();
  };
  const getItemTotalPrice = (eventItem) => {
    const item = eventItem.find((item) => item.id === eventItem.id);
    return item ? item.price * (item.quantity + 1) : 0;
  };

  const handleIncrement = (eventItem) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === eventItem ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + getItemTotalPrice(eventItem)
    );
  };

  const handleDecrement = (eventItem) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === eventItem && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - getItemTotalPrice(eventItem)
    );
  };

  const handleSubmit = () => {
    const item = {
      id: eventItem.id,
      name: eventItem.name,
      quantity: count,
      price: totalPrice,
    };
    console.log("successful orders:", cartItems);
  };

  return (
    <>
      <div>
        <h1>My Cart Items: </h1>
        <form>
          {eventList.map((item) => (
            <div key={item.id}>
              <CardItem eventItem={item} handleSelect={handleRemove} />
              <div
                // className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Button variant="outline-primary" onClick={handleDecrement}>
                    -
                  </Button>
                  <div>
                    <span className="text-muted fs-3 fw-bold">{count}</span>
                    in Cart
                  </div>
                  <Button variant="outline-primary" onClick={handleIncrement}>
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={handleRemoveFromCart}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
