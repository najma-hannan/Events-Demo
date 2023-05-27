import React, { createContext, useState, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [eventList, setEventList] = useState([]);

  // const [eventList, setEventList] = useLocalStorage("eventList", []);
  // const [eventList, setEventList] = useLocalStorage("eventList", []);
  const [selectedEvents, setSelectedEvents] = useLocalStorage(
    // Use the useLocalStorage hook
    "selectedEvents", // Provide the key for localStorage
    []
  );

  // useEffect(() => {
  //   fetch("https://63cbc73dea85515415153ca7.mockapi.io/campaignData/refferals")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEventList(data);
  //     });
  // }, []);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events");
        const data = await response.json();
        setEventList(data);
        console.log("Fetched events:", data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  const addToCart = (eventItem) => {
    setSelectedEvents([...selectedEvents, eventItem]);
    setEventList(eventList.filter((card) => card.id !== eventItem.id));
    console.log("Item added to cart:", eventItem);
  };

  const removeFromCart = (itemId) => {
    setSelectedEvents((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setSelectedEvents([]);
  };

  const cartCount = selectedEvents.length;

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
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
