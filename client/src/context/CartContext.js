import React, { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./cartReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    selectedEvents: [],
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [eventList, setEventList] = useLocalStorage("eventList", []);
  const [selectedEvents, setSelectedEvents] = useLocalStorage(
    "selectedEvents",
    []
  );
  const [token, setToken] = useLocalStorage("token", "");
  const [cartItems, setCartItems] = useState([]);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/events");
        const data = await response.json();
        setEventList(data);
        console.log("Fetched events:", data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();
  }, [setEventList]);

  const addToCart = async (eventItem) => {
    const isItemInCart = selectedEvents.some(
      (item) => item.id === eventItem.id
    );

    if (isItemInCart) {
      console.log("Item is already in the cart:", eventItem);
    } else {
      console.log("event  Item hapa", eventItem);
      try {
        const response = await fetch("http://localhost:3000/api/carts/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(eventItem),
        });

        if (response.ok) {
          const updatedCart = [...selectedEvents, eventItem];
          setSelectedEvents(updatedCart);
          console.log("Item added to cart:", eventItem);
          setEventList((prevEventList) =>
            prevEventList.filter(
              (cardItem) => cardItem.eventId !== eventItem.eventId
            )
          );
          cartDispatch({
            type: "SET_CART",
            payload: updatedCart,
          });
          const data = await response.json();
          setToken(data.token);
        } else {
          throw new Error("Failed to add item to cart");
        }
      } catch (err) {
        console.log("Failed to add item to cart: ", err);
      }
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  const clearCart = () => {
    setSelectedEvents([]);
    cartDispatch({ type: "SET_CART", payload: [] });
  };

  const cartCount = selectedEvents.length;

  const calculateTotalPrice = (items) => {
    // Calculate the total price based on the items in the cart
    const cartTotal = selectedEvents.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return cartTotal;
  };

  const handleCheckout = async (
    cartItem,
    cartItems,
    calculateTotalPrice,
    setCheckoutSuccess
  ) => {
    try {
      await fetch("http://localhost:3000/carts/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: cartItem.id, // Provide the cart ID
          quantity: cartItems.length, // Provide the quantity based on the number of items in the cart
          totalPrice: calculateTotalPrice(cartItems), // Provide the total price calculated based on the items in the cart
        }),
      });
      clearCart();
      setCheckoutSuccess(true); // Set the checkout success state to true
    } catch (error) {
      console.error("Error during checkout:", error);
      // Handle the error or display an error message
    }
  };
  useEffect(() => {
    if (selectedEvents.length > 0) {
      handleCheckout(
        cartState,
        cartItems,
        calculateTotalPrice,
        setCheckoutSuccess
      );
    }
  }, [
    selectedEvents,
    cartState,
    cartItems,
    calculateTotalPrice,
    setCheckoutSuccess,
  ]);

  return (
    <>
      <CartContext.Provider
        value={{
          eventList,
          cartState,
          cartDispatch,
          selectedEvents,
          addToCart,
          removeFromCart,
          clearCart,
          cartCount,
          handleCheckout,
          checkoutSuccess,
          setCheckoutSuccess,
          token,
          setToken,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
