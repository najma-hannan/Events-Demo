import { Link, useLoaderData } from "react-router-dom";
import PageHeader from "../PageHeader";
import { Button, Container, Stack } from "react-bootstrap";
import axios from "axios";
import UpdateEventCard from "./UpdateEventCard";
import { EventTicketTypesCard } from "./EventTicketTypesCard";
import EventOrdersCard from "./EventOrdersCard";

export async function loader({ params }) {
    const eventId = params.event_id;

    if (!eventId) {
        return null;
    }

    return Promise.all([
        axios.get(`events/${eventId}`),
        axios.get(`events/${eventId}/orders`)
    ]).then(([eventResponse, ordersResponse]) => {
        return { event: eventResponse.data, orders: ordersResponse.data };
    }).catch(([eventError, ordersError]) => {
        console.error({ eventError, ordersError });
        return { event: null, orders: [] };
    });
}

export default function EditEvent() {
    const {event, orders} = useLoaderData();

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
                <UpdateEventCard event={event} />
                <EventTicketTypesCard event={event} />
                <EventOrdersCard event={event} orders={orders}/>
            </Stack>
        </Container>
    </>
}
