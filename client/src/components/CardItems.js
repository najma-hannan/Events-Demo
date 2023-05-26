import React from "react";
import { CardItem } from "./CardItem";

export const CardItems = ({ eventList, handleClickAddToCart }) => {
  const showEventItems = eventList.map((eventItem) => {
    return (
      <CardItem
        key={eventItem.id}
        eventItem={eventItem}
        handleClickAddToCart={handleClickAddToCart}
      />
    );
  });
  return (
    <div>
      <div className="menu-items">{showEventItems}</div>
    </div>
  );
};
