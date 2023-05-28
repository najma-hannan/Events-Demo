import { useLoaderData } from "react-router-dom";
import PageHeader from "./PageHeader";
import { Alert, Container } from "react-bootstrap";
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
        <PageHeader title="Events" />

        <section className="py-4">
            <Container>
                {
                    events.length > 0 ?
                        events.map((event) => (
                            <article key={event.id}>
                                <p>{event.title}</p>
                            </article>
                        )) :
                        <Alert variant="info" className="col-5 mx-auto">
                            <p>Uh-oh! Our archives seem to be empty at the moment. Come back later.</p>
                        </Alert>

                }
            </Container>
        </section>
    </>
}
