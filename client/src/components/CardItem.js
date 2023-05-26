import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FcLike } from "react-icons/fc";

export const CardItem = ({
  eventItem,
  handleClickAddToCart,
  handleDeleteTicket,
}) => {
  const [count, setCount] = useState(1); // Default count value is 1

  const handleIncrement = () => {
    setCount(count + 1); // Increase count by 1
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1); // Decrease count by 1, but not below 1
    }
  };
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
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span
              className="text-muted"
              style={{
                fontFamily: "Segoe UI",
                height: "10px",
                fontSize: "15px",
              }}
            >
              {eventItem.name}
              <span
                className="ms-2 text-muted"
                style={{ padding: "5px", height: "5px" }}
                // onClick={() => handleClick(eventItem)}
              >
                <FcLike />
              </span>
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
            {count === 0 ? (
              <Button
                className="w-60"
                variant="primary"
                onClick={() => handleClickAddToCart(eventItem)}
              >
                Add to Cart
              </Button>
            ) : (
              <div
                // className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <Button variant="outline-primary" onClick={handleDecrement}>
                    -
                  </Button>
                  <div>
                    <span className="text-muted fs-3 fw-bold">{count}</span>
                    in Cart
                  </div>

                  <Button variant="outline-primary" onClick={handleIncrement}>
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteTicket(eventItem.id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
