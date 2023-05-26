import React, { useEffect, useState } from "react";
import { CardItems } from "./CardItems";
import Navbar from "./NavBar";
import Cart from "../pages/Cart";
import { CardItem } from "./CardItem";

export default function CardContainer() {
  const [eventList, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://63cbc73dea85515415153ca7.mockapi.io/campaignData/refferals")
      .then((response) => response.json())
      .then((data) => {
        setAllEventItems(data);
      });
  }, []);

  useEffect(() => {
    setCartCount(selectedItems.length);
  }, [selectedItems]);

  const handleSelect = (eventItem) => {
    setCurrentItem(eventItem);
  };
  function handleRemove(eventItem) {
    const newEventsArray = selectedEvent.filter(
      (card) => card.id !== eventItem.id
    );
    setSelectedEvent(newEventsArray);
  }

  const handleClickAddToCart = (eventItem) => {
    const newEventsArray = selectedEvent.filter(
      (card) => card.id !== eventItem.id
    );
    setSelectedItems([...newEventsArray, eventItem]);
    setEventList(eventList.filter((card) => card.id !== eventItem.id));
    console.log("Items added to cart:", selectedItems);
  };

  return (
    <div>
      {/* <Navbar cartCount={cartCount} /> */}
      <Cart eventList={selectedEvent} handleRemove={handleRemove} />
      {currentItem === undefined ? (
        <CardItems
          eventList={eventList}
          handleClickAddToCart={handleClickAddToCart}
          handleSelect={handleSelect}
        />
      ) : (
        <CardItem
          eventItem={currentItem}
          handleClickAddToCart={handleClickAddToCart}
        />
      )}
    </div>
  );
}
