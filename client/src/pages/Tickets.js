import React, { useEffect, useState } from "react";
import { CardContainer } from "../components/CardContainer";

export default function Tickets() {
  const [eventItems, setEventItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://63cbc73dea85515415153ca7.mockapi.io/campaignData/refferals")
      .then((response) => response.json())
      .then((data) => {
        setEventItems((eventItems) => data);
      });
  }, []);

  // function handleUpdateTicket(updatedTicketItem) {
  //   setEventItems((eventItems) => {
  //     return eventItems.id === updatedTicketItem.id
  //       ? updatedTicketItem
  //       : eventItems;
  //   });
  // }

  const handleClickAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  function handleUpdateTicket(updatedTicketItem) {
    setEventItems((eventItems) => {
      return eventItems.map((ticket) =>
        ticket.id === updatedTicketItem.id ? updatedTicketItem : ticket
      );
    });
  }

  function handleDeleteTicket(deletedTicketItem) {
    setEventItems((eventItems) =>
      eventItems.filter((ticket) => ticket.id !== deletedTicketItem.id)
    );
    console.log(eventItems);
  }

  return (
    <div>
      <CardContainer
        eventItems={eventItems}
        onUpdate={handleUpdateTicket}
        onDelete={handleDeleteTicket}
        handleClickAddToCart={handleClickAddToCart}
        handleDeleteTicket={handleDeleteTicket}
        // faveItems={faveItems}
        // addLikes={handleAddLikes}
      />
    </div>
  );
}
