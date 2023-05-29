import axios from "axios";
import { useState } from "react";
import { Form, Button, Card, Stack } from "react-bootstrap";
import { useRevalidator } from "react-router-dom";
import { formControlDateFormat } from "../../utils";
import ErrorContainer from "../ErrorContainer";

export default function UpdateEventCard({ event }) {
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);

    const revalidator = useRevalidator();

    async function handleUpdate(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            await axios.patch(`events/${event.id}`, { event: Object.fromEntries(formData.entries()) });

            revalidator.revalidate();
        } catch (error) {
            console.error(error);

            if (error.response?.status === 422) {
                setErrors(error.response.data?.errors);
                setValidated(true);
            }
        }
    }

    return (
        <Card>
            <Card.Header>Event Details</Card.Header>
            <Card.Body>
                <ErrorContainer errors={errors?.base} />

                <Form validated={validated} onSubmit={handleUpdate}>
                    <Stack gap={3}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" type="text" autoComplete="off" isValid={!!errors?.title} defaultValue={event.title} required />
                            <Form.Control.Feedback type="invalid">
                                {errors?.title?.[0]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" as="textarea" rows={3} isValid={!!errors?.description} defaultValue={event.description} required />
                            <Form.Control.Feedback type="invalid">
                                {errors?.description?.[0]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control name="location" type="text" autoComplete="off" isValid={!!errors?.location} defaultValue={event.location} required />
                            <Form.Control.Feedback type="invalid">
                                {errors?.location?.[0]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                name="start_date"
                                type="datetime-local"
                                autoComplete="off"
                                isValid={!!errors?.start_date}
                                min={formControlDateFormat(new Date())}
                                defaultValue={formControlDateFormat(new Date(event.start_date))}
                                required />
                            <Form.Control.Feedback type="invalid">
                                {errors?.start_date?.[0]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                name="end_date"
                                type="datetime-local"
                                autoComplete="off"
                                min={formControlDateFormat(new Date())}
                                defaultValue={formControlDateFormat(new Date(event.end_date))}
                                isValid={!!errors?.end_date}
                                required />
                            <Form.Control.Feedback type="invalid">
                                {errors?.end_date?.[0]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-flex justify-content-end">
                            <Button type="submit">Update event</Button>
                        </div>
                    </Stack>

                </Form>
            </Card.Body>
        </Card>
    );
}
