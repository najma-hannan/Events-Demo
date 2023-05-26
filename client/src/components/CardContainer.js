import React from "react";
import { CardItem } from "./CardItem";

export const CardContainer = ({
  eventItems,
  handleClickAddToCart,
  handleDeleteTicket,
}) => {
  const showEventItems = eventItems.map((eventItem) => {
    return (
      <CardItem
        key={eventItem.id}
        eventItem={eventItem}
        handleClickAddToCart={handleClickAddToCart}
        handleDeleteTicket={handleDeleteTicket}
      />
    );
  });
  return (
    <div>
      <div className="menu-items">{showEventItems}</div>
    </div>
  );
};
