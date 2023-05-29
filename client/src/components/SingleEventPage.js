import React from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeader from './PageHeader';
import { Alert, Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { dateFormatter } from '../utils';

export async function loader({ params }) {
  const eventId = params.event_id;

  if (!eventId) {
    return null;
  }

  try {
    const response = await axios.get(`events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(error);

    if (error.response?.status === 404) {
      return null;
    }

    throw new Error(error.message);
  }
}

const SingleEventPage = () => {
  const event = useLoaderData();

  if (!event) {
    return <>
      <p>No such event exists</p>
      <p>Go back to the <Link to={"/events"}>events list.</Link></p>
    </>
  }

  return (
    <>
      <PageHeader title={event.title} actions={<>
        <Button as={Link} variant="link" to={"/events"}>Back to event gallery</Button>
      </>} />
      <Container className="mt-3 pb-5" fluid="lg">
        <Row className='gy-4'>
          <Col md={5}>
            <Card>
              <Card.Body>
                <Card.Text className="text-muted">
                  <span>{dateFormatter.format(new Date(event.start_date))}</span> {" - "} <span>{dateFormatter.format(new Date(event.end_date))}</span> <br />
                  {event.location}
                </Card.Text>
                <Card.Text>
                  {event.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Text>Organized by: {event.organizer.name}</Card.Text>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={7}>
            <Card>
              <Card.Header>Tickets</Card.Header>
              <Card.Body>
                {
                  event?.tickets?.length > 0 ?
                    <Form className="">
                      <Stack gap={4}>
                        {event.tickets?.map((ticket) => (
                          <Form.Group key={ticket.id}>
                            <Form.Label>{ticket.name}: <span className="fw-bold">KES {ticket.price}</span></Form.Label>
                            <Form.Control
                              type="number"
                              defaultValue="0"
                            />
                          </Form.Group>
                        ))}

                        <div className="d-flex justify-content-end">
                          <Button variant="success">Buy tickets</Button>
                        </div>
                      </Stack>
                    </Form> : <>
                      <Alert variant="info">Ticket information is yet to be posted!</Alert>
                    </>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleEventPage;
