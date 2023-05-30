import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";
import StarRating from "./StarRating";
import { CartContext } from "../context/CartContext";
// import axios from "axios";

export default function Cart() {
  const {
    cartState,
    cartDispatch,
    clearCart,
    removeFromCart,
    selectedEvents,
    handleCheckout,
  } = useContext(CartContext);
  const cart = cartState.cartItems;
  const [total, setTotal] = useState(0);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const removeCartItem = (eventItem) => {
    removeFromCart(eventItem.id);
    //  cartDispatch({ type: "REMOVE_FROM_CART", payload: eventItem });
  };

  const handleClearCart = () => {
    clearCart();
  };
  const handleCheckoutClick = () => {
    // Call the handleCheckout function from the context
    handleCheckout();
  };

  return (
    <>
      <div>
        <div>
          {cart.length === 0 ? (
            <div>No items in the cart</div>
          ) : (
            <ListGroup>
              {cart.map((eventItem) => (
                <ListGroup.Item key={eventItem.id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={eventItem.image}
                        alt={eventItem.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>
                      <span>{eventItem.name}</span>
                    </Col>
                    <Col md={2}>Ks {eventItem.price}</Col>
                    <Col md={2}>
                      <StarRating rating={eventItem.rating} />
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={eventItem.qty}
                        onChange={(e) =>
                          cartDispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: eventItem.id,
                              qty: parseInt(e.target.value),
                            },
                          })
                        }
                      >
                        {[...Array(eventItem.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeCartItem(eventItem)}
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
        <div className="filters summary">
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: Ksh {total}
          </span>
          <Button
            type="button"
            disabled={cart.length === 0}
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
          <Button
            type="button"
            disabled={cart.length === 0}
            onClick={handleCheckoutClick}
          >
            Proceed to Checkout
          </Button>
          {checkoutSuccess && (
            <div className="success-message">Checkout successful!</div>
          )}
        </div>
      </div>
    </>
  );
}
