import { Button, Card, Container, Table } from "react-bootstrap";
import { Link, useLoaderData, useRevalidator, useRouteLoaderData } from "react-router-dom";
import PageHeader from "../PageHeader";
import axios from "axios";
import { dateFormatter } from "../../utils";

export async function loader() {
    try {
        const response = await axios.get("/events");
        return response.data;
    } catch (error) {
        console.error("Error fetching list events", error);
        return [];
    }
}


export default function ListEvents() {
    const revalidator = useRevalidator();

    const user = useRouteLoaderData("root");
    const events = useLoaderData();
    const filteredEvents = events?.filter(event => event.organizer.id === user.id);

    async function deleteEvent(eventId, title) {
        if(!window.confirm(`Are you sure you want to delete '${title}' event?`)) {
            return;
        }

        try {
            await axios.delete(`events/${eventId}`);
            window.alert(`[info] Successfully deleted "${title}" event.`)
            revalidator.revalidate();
        } catch (error) {
            console.error(error);
            if(error.response?.status === 403) {
                window.alert("[Ooops] You are not authorized to make this action.");
            }
        }
    }

    return (<section>
        <PageHeader title="Manage Events" actions={
            <>
                <Button as={Link} to="/admin/events/new">Create Event</Button>
            </>
        } />

        <Container fluid="sm" className="py-4">

            {filteredEvents.length > 0 ?
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Created At</td>
                            <td><span className="sr-only">Actions</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEvents.map((event) => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{dateFormatter.format(new Date(event.start_date))}</td>
                                <td>{dateFormatter.format(new Date(event.end_date))}</td>
                                <td>{dateFormatter.format(new Date(event.created_at))}</td>
                                <td>
                                    <Button as={Link} size="sm" variant="link" to={`/admin/events/${event.id}/edit`}>Edit</Button>
                                    <Button size="sm" variant="link" className="text-danger" onClick={() => deleteEvent(event.id, event.title)} >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                : <Card className="col-5 mx-auto">
                    <Card.Body>
                        <p>You don't have any events yet.</p>
                        <Link to={"/admin/events/new"}>Create an event</Link>
                    </Card.Body>
                </Card>
            }
        </Container>
    </section>);
}
