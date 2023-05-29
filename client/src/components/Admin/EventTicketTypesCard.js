import axios from "axios";
import { useState } from "react";
import { Form, Card, Stack, Button, Table, Row } from "react-bootstrap";
import { useRevalidator } from "react-router-dom";
import { dateFormatter, formControlDateFormat } from "../../utils";


const INITIAL_TICKET_STATE = {
    name: "",
    price: "",
    quantity: "",
    available_until: "",
};

export function EventTicketTypesCard({ event }) {
    const [ticket, setTicket] = useState(() => ({ ...INITIAL_TICKET_STATE }));

    function updateTicketState(field, value) {
        if(field === 'available_until') {
            value = formControlDateFormat(new Date(value));
        }

        setTicket({...ticket, [field]: value});
    }

    function registerField(fieldName) {
        return {
            value: ticket[fieldName],
            onChange: e => updateTicketState(fieldName, e.target.value)
        }
    }

    function loadTicket({id, name, quantity, price, available_until}) {
        setTicket({id, name, quantity, price, available_until: formControlDateFormat(new Date(available_until))})
    }

    function resetForm() {
        setTicket({...INITIAL_TICKET_STATE});
    }

    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);

    const revalidator = useRevalidator();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if(!!ticket.id) {
                await axios.patch(`/tickets/${ticket.id}`, ticket);
            } else {
                await axios.post(`events/${event.id}/tickets`, ticket);
            }

            revalidator.revalidate();

            resetForm();
        } catch (error) {
            console.error(error);

            if (error.response?.status === 422) {
                setErrors(error.response.data?.errors);
                setValidated(true);
            }
        }
    }

    async function removeTicket({ticketId, ticketName, eventTitle}) {
        if(!window.confirm(`Are you sure you want to delete '${ticketName}' ticket for '${eventTitle}'?`)) {
            return;
        }

        try {
            await axios.delete(`/tickets/${ticketId}`);

            revalidator.revalidate();
        } catch(error) {
            console.error(error);

            if(error.response?.status === 422) {
                setErrors(error.response.data?.errors);
                setValidated(true);
            }
        }
    }


    return (
        <Card>
            <Card.Header>Ticket Information</Card.Header>
            <Card.Body>
                <Card className="col-md-8">
                    <Card.Body>
                        <Form key={event.tickets?.length} validated={validated} onSubmit={handleSubmit}>
                            <Stack gap={4}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" {...registerField('name')} autoComplete="off" isInvalid={!!errors?.name} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.name?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Form.Group className="col-md-6">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" {...registerField('price')} min="0" autoComplete="off" isInvalid={!!errors?.price} required />
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.price?.[0]}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="col-6 col-md-6">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" {...registerField('quantity')} min="0" autoComplete="off" isInvalid={!!errors?.quantity} required />
                                        <Form.Control.Feedback type="invalid">
                                            {errors?.price?.[0]}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>


                                <Form.Group>
                                    <Form.Label>Available Until</Form.Label>
                                    <Form.Control type="datetime-local" {...registerField('available_until')} max={formControlDateFormat(new Date(event.start_date))} isInvalid={!!errors?.available_until} required />
                                    <Form.Control.Feedback type="invalid">
                                        {errors?.available_until?.[0]}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex justify-content-end">
                                    <Button variant={"outline-secondary"} className="me-1" type="reset" onClick={resetForm}>Clear</Button>
                                    <Button type="submit" variant={!!ticket.id ? 'outline-primary' : 'primary'}>
                                        {!!ticket.id ? 'Update Ticket Information' : 'Add Ticket Information'}
                                    </Button>
                                </div>
                            </Stack>
                        </Form>
                    </Card.Body>
                </Card>

                {
                    event.tickets?.length > 0 ?
                        <Table className="mt-4" striped bordered size="sm">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Qty</td>
                                    <td>Available Until</td>
                                    <td><span className="visually-hidden">Actions</span></td>
                                </tr>
                            </thead>
                            <tbody>
                                {event.tickets.map((ticket, idx) => (
                                    <tr key={ticket.id}>
                                        <td>{idx + 1}</td>
                                        <td>{ticket.name}</td>
                                        <td>{ticket.price}</td>
                                        <td>{ticket.quantity}</td>
                                        <td>{dateFormatter.format(new Date(ticket.available_until))}</td>
                                        <td>
                                            <Button variant={"link"} size="sm" onClick={() => loadTicket(ticket)}>Edit</Button>
                                            <Button variant={"link"} size="sm" className="text-danger" onClick={() => removeTicket({
                                                eventTitle: event.title,
                                                ticketName: ticket.name,
                                                ticketId: ticket.id,
                                            })}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> : <>
                            <p>Add new ticket information above</p>
                        </>
                }


            </Card.Body>
        </Card>
    )
}
