import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import PageHeader from "../PageHeader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ErrorContainer from "../ErrorContainer";

export default function CreateEvent() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    function handleImageChange(e) {
        setImageFile(e.target.files[0]);
    }


    async function handleSubmit(e) {
        e.preventDefault();

        // const formData = new FormData(e.target);
        const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("location", e.target.location.value);
    formData.append("start_date", e.target.start_date.value);
    formData.append("end_date", e.target.end_date.value);
    formData.append("image", imageFile);

        try {
            await axios.post("events", { event: Object.fromEntries(formData.entries()) });

            navigate("/admin/events");
        } catch (error) {
            console.error(error);

            if (error.response?.status === 422) {
                setErrors(error.response.data?.errors);
                setValidated(true);
            }
        }
    }

    return <>
        <PageHeader title="Create new event" actions={<>
            <Button as={Link} variant={"link"} to={"/admin/events"}>Back to events</Button>
        </>} />

        <Container className="pt-4 pb-5">
            <Card className="col-md-10">
                <Card.Header>Event Details</Card.Header>

                <Card.Body>
                    <ErrorContainer errors={errors?.base}/>

                    <Form validated={validated} className="" onSubmit={handleSubmit}>
                        <Stack gap={3}>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="title" type="text" autoComplete="off" isValid={!!errors?.title} required />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.title?.[0]}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" as="textarea" rows={3} isValid={!!errors?.description} required />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.description?.[0]}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control name="location" type="text" autoComplete="off" isValid={!!errors?.location} required />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.location?.[0]}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control name="start_date" type="datetime-local" autoComplete="off" isValid={!!errors?.start_date} required />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.start_date?.[0]}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control name="end_date" type="datetime-local" autoComplete="off" isValid={!!errors?.end_date} required />
                                <Form.Control.Feedback type="invalid">
                                    {errors?.end_date?.[0]}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group>
                             <Form.Label>Image</Form.Label>
                              <Form.Control type="file" accept="image/*" name="image_url" onChange={handleImageChange} isValid={!!errors?.image_url} required />
                              <Form.Control.Feedback type="invalid">
                                    {errors?.image_url?.[0]}
                                </Form.Control.Feedback>
                             </Form.Group>

                            <div className="d-flex justify-content-end">
                                <Button type="submit">Create event</Button>
                            </div>
                        </Stack>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </>
}
