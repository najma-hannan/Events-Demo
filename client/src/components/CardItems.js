import React from "react";
import { CardItem } from "./CardItem";

export const CardItems = ({ eventList }) => {
  if (!eventList || eventList.length === 0) {
    return <div>No event items available.</div>;
  }

  const showEventItems = eventList.map((eventItem) => {
    return <CardItem key={eventItem.id} eventItem={eventItem} />;
  });
  return (
    <div>
      <div className="menu-items">{showEventItems}</div>
    </div>
  );
};
