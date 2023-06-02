import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Form, Stack } from "react-bootstrap";

function defaultTicketsCount(event) {
    if (event?.tickets?.length === 0) {
        return [];
    }

    return event?.tickets.map(ticket => ({ ticket_id: ticket.id, quantity: 0 }));
}

export function PurchaseTicketForm({ event }) {
    const [ticketsCount, setTicketsCount] = useState(() => defaultTicketsCount(event));

    function updateTicketCount(index, newQuantity) {
        const newTicketsCount = [...ticketsCount];
        newTicketsCount[index].quantity = newQuantity;
        setTicketsCount(newTicketsCount);
    }

    function cleanTicketCount() {
        return ticketsCount.filter(entry => entry.quantity !== 0);
    }

    const [recentlyPurchased, setRecentlyPurchased] = useState(false);
    const [recentOrder, setRecentOrder] = useState(null);

    useEffect(() => {
        let timeOutId;

        if (recentlyPurchased) {
            timeOutId = setTimeout(() => {
                setRecentlyPurchased(false);
                setRecentOrder(null);
            }, 5000);
        }

        return () => {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
        }
    }, [recentlyPurchased]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(`/events/${event.id}/orders`, { tickets: cleanTicketCount() });

            setRecentlyPurchased(true);
            setRecentOrder(response.data);
            setTicketsCount(...defaultTicketsCount())
        } catch (error) {
            console.error(error);
        }
    }


    return (<Card>
        <Card.Header>Tickets</Card.Header>
        <Card.Body>
            {
                recentlyPurchased && recentOrder && (
                    <Alert className="mb-3" variant={"success"}>
                        <strong>Success!</strong>
                        <p>Order #{recentOrder?.id} by {recentOrder?.user.name}</p>
                        <ul className="list-unstyled">
                            {
                                recentOrder?.order_items.map(({ ticket, quantity, price }) => (<li key={ticket.id}>
                                    {ticket.name}: {" "} {quantity} @ {" "} {price}
                                </li>))
                            }
                        </ul>
                        <hr />
                        <p>KES {recentOrder?.total_amount}</p>
                    </Alert>
                )
            }

            {
                event?.tickets?.length > 0 ?
                    <Form key={recentlyPurchased} className="" onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            {event.tickets?.map((ticket, idx) => (
                                <Form.Group key={ticket.id}>
                                    <Form.Label>{ticket.name}: <span className="fw-bold">KES {ticket.price}</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        defaultValue="0"
                                        onChange={e => updateTicketCount(idx, e.target.value)}
                                    />
                                </Form.Group>
                            ))}

                            <div className="d-flex justify-content-end">
                                <Button type="submit" variant="success">Buy tickets</Button>
                            </div>
                        </Stack>
                    </Form> : <>
                        <Alert variant="info">Ticket information is yet to be posted!</Alert>
                    </>}
        </Card.Body>
    </Card>)
}
