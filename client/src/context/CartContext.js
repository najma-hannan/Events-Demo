import React, { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./cartReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    selectedEvents: [],
  };
  // const [state, dispatch] = useReducer(cartReducer, {
  //   cart: [],
  // });

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const [eventList, setEventList] = useLocalStorage("eventList", []);
  const [selectedEvents, setSelectedEvents] = useLocalStorage(
    "selectedEvents",
    []
  );

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
  }, [setEventList]);

  // const addToCart = (eventItem) => {
  //   const isItemInCart = selectedEvents.some(
  //     (item) => item.id === eventItem.id
  //   );
  //   if (isItemInCart) {
  //     console.log("Item is already in the cart:", eventItem);
  //   } else {
  //     setSelectedEvents([...selectedEvents, eventItem]);
  //     setEventList(
  //       eventList.filter((cardItem) => cardItem.eventId !== eventItem.eventId)
  //     );
  //     console.log("Item added to cart:", eventItem);
  //     cartDispatch({
  //       type: "SET_CART",
  //       payload: updatedCart,
  //       // payload: [...selectedEvents, eventItem],
  //     });
  //   }
  // };

  const addToCart = (eventItem) => {
    const isItemInCart = selectedEvents.some(
      (item) => item.id === eventItem.id
    );
    if (isItemInCart) {
      console.log("Item is already in the cart:", eventItem);
    } else {
      const updatedCart = [...selectedEvents, eventItem];
      setSelectedEvents(updatedCart);
      setEventList(
        eventList.filter((cardItem) => cardItem.eventId !== eventItem.eventId)
      );
      console.log("Item added to cart:", eventItem);
      cartDispatch({
        type: "SET_CART",
        payload: updatedCart,
      });
    }
  };

  // const removeFromCart = (itemId) => {
  //   cartDispatch((prevState) => ({
  //     ...prevState,
  //     cart: prevState.cart.filter((item) => item.id !== itemId),
  //   }));
  // };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  const clearCart = () => {
    setSelectedEvents([]);
    cartDispatch({ type: "SET_CART", payload: [] });
  };

  const cartCount = selectedEvents.length;

  return (
    <>
      <CartContext.Provider
        value={{
          // state,
          // dispatch,
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
