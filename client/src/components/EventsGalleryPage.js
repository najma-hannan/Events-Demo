import { Link, useLoaderData } from "react-router-dom";
import PageHeader from "./PageHeader";
import { Alert, Button, Card, Container } from "react-bootstrap";
import axios from "axios";

export async function loader() {
    try {
        const response = await axios.get("events");
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function EventsGalleryPage() {
    const events = useLoaderData();

    return <>
        <PageHeader title="Find your next hangout plan" />

        <section className="py-4">
            <Container fluid>
                {
                    events.length > 0 ?
                        <ul className="list-unstyled row row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
                            {events.map((event) => (
                                <li key={event.id}>
                                    <Card>
                                        <Card.Img variant="top" src="" />
                                        <Card.Body>
                                            <Card.Title>{event.title}</Card.Title>
                                            <Card.Text> <small className="text-muted"> Organized by: {event.organizer.name}</small></Card.Text>
                                            <Card.Text>{event.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button size="sm" variant="link" as={Link} to={`/events/${event.id}`}>View Event</Button>
                                        </Card.Footer>
                                    </Card>
                                </li>
                            ))}
                        </ul> :
                        <Alert variant="info" className="col-5 mx-auto">
                            <p>Uh-oh! Our archives seem to be empty at the moment. Come back later.</p>
                        </Alert>

                }
            </Container>
        </section>
    </>
}
