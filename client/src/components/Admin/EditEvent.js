import { Link, useLoaderData } from "react-router-dom";
import PageHeader from "../PageHeader";
import { Button, Card, Container, Stack } from "react-bootstrap";
import axios from "axios";
import UpdateEventCard from "./UpdateEventCard";

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

export default function EditEvent() {
    const event = useLoaderData();

    if (!event) {
        return <>
            <p>No such event exists</p>
            <p>Go back to the <Link to={"/admin/events"}>events list.</Link></p>
        </>
    }

    return <>
        <PageHeader title={`Edit ${event.title}`} actions={<>
            <Button as={Link} variant={"link"} to={"/admin/events"}>Back to events</Button>
        </>} />

        <Container className="py-4">
            <Stack gap={4} className="col-lg-10">
                <UpdateEventCard event={event}/>


                <Card>
                    <Card.Header>Ticket Information</Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>

            </Stack>
        </Container>
    </>
}
