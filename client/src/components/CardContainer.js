import React, { useContext } from "react";
import { CardItems } from "./CardItems";
import { CartContext } from "../context/CartContext";

export default function CardContainer() {
  const { eventList } = useContext(CartContext);

  return (
    <div>
      <CardItems eventList={eventList} />
    </div>
  );
}
