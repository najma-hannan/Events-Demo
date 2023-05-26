import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const CardItem = ({ eventItem, handleClickAddToCart }) => {
  return (
    <div>
      <Card className="text-center" key={eventItem.id}>
        <Card.Img
          variant="top"
          height="150px"
          style={{ objectFit: "cover" }}
          // src={require(`${eventItem.image}`)}
          src={eventItem.image}
          alt={`${eventItem.name} event`}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-center mb-4">
            <span
              className="text-muted"
              style={{
                fontFamily: "Segoe UI",
                height: "10px",
                fontSize: "15px",
              }}
            >
              {eventItem.name}
            </span>
          </Card.Title>
          <span
            className="text-muted"
            style={{
              fontFamily: "Segoe UI",
              height: "10px",
              fontSize: "12px",
            }}
          >
            {eventItem.date}
          </span>
          <p
            className="text-muted"
            style={{ fontFamily: "Segoe UI", height: "20px", fontSize: "12px" }}
          >
            {eventItem.description}
          </p>
          <Badge bg="secondary">Ksh {eventItem.price}</Badge>
          <div className="mt-auto">
            <Button
              className="w-60"
              variant="primary"
              onClick={handleClickAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
