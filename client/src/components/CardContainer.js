import React, { useEffect, useState, useContext } from "react";
import { CardItems } from "./CardItems";
import { CardItem } from "./CardItem";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

export default function CardContainer() {
  const { selectedEvents, eventList } = useContext(CartContext);

  // useEffect(() => {
  //   fetch("https://63cbc73dea85515415153ca7.mockapi.io/campaignData/refferals")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEventList(data);
  //     });
  // }, []);

  return (
    <div>
      <Cart />
      {selectedEvents.length === 0 ? (
        <CardItems eventList={eventList} />
      ) : (
        <CardItem />
      )}
    </div>
  );
}
