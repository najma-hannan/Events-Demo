import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import StarRating from "./StarRating";
import { CartContext } from "../context/CartContext";

export const CardItem = ({ eventItem }) => {
  const { addToCart } = useContext(CartContext);

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
          <Button variant="primary" onClick={() => addToCart(eventItem)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
