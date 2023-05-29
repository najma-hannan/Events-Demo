import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";

export const CardItem = ({ eventItem, addToCart, selectedEvents }) => {
  const handleAddToCart = () => {
    addToCart(eventItem);
  };

  const isItemInCart = selectedEvents.some((item) => item.id === eventItem.id);

  return (
    <div>
      <Card className="text-center" key={eventItem.id}>
        <Card.Img
          variant="top"
          src={eventItem.image}
          alt={`${eventItem.name} event`}
        />
        <Card.Body>
          <Card.Title>{eventItem.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{eventItem.date}</span>
            <span>{eventItem.location}</span>
            <span>{eventItem.description}</span>
            <span>{eventItem.location}</span>
            {/* <Badge bg="secondary">Ksh {eventItem.price}</Badge> */}
            <StarRating rating={eventItem.rating} />
          </Card.Subtitle>
          <Button
            type="button"
            variant={isItemInCart ? "danger" : "success"}
            onClick={handleAddToCart}
            disabled={isItemInCart}
          >
            {isItemInCart ? "Item in Cart" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
