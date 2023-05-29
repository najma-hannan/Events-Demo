import React, { useContext } from "react";
import { CardItems } from "./CardItems";
import { CartContext } from "../context/CartContext";

export default function CardContainer() {
  const { selectedEvents, addToCart, eventList } = useContext(CartContext);

  const handleAddToCart = (eventItem) => {
    addToCart(eventItem);
  };

  return (
    <div>
      {eventList.length === 0 && selectedEvents.length === 0 ? (
        <div>No event items available at this time!</div>
      ) : (
        <CardItems
          eventList={eventList}
          addToCart={handleAddToCart}
          selectedEvents={selectedEvents}
        />
      )}
    </div>
  );
}
