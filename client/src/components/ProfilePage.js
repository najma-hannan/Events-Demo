import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useRevalidator, useRouteLoaderData } from "react-router-dom";
import ErrorContainer from "./ErrorContainer";
import PageHeader from "./PageHeader";

export default function ProfilePage() {
    const revalidator = useRevalidator();

    const user = useRouteLoaderData("root");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    async function updateProfile(event) {
        event.preventDefault();

        setIsLoading(true);

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.patch("/profile", data);

            revalidator.revalidate();
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setErrors([error.message]);
            }

            console.error(error);
        }
        setIsLoading(false);
    }

    return (
        <>
            <PageHeader title="Update Profile" />

            <Container className="py-4">
                <ErrorContainer errors={errors} className={"container mt-1"} />
                <section className="card col-6">
                    <div className="card-body">
                        <h3 className="fs-4">Personal Details</h3>
                        <Form className="mt-4" onSubmit={updateProfile}>
                            <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" autoComplete='off' placeholder="Enter full name" name="name" defaultValue={user.name} required />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" autoComplete='off' placeholder="Enter full name" name="email" defaultValue={user.email} required />
                            </Form.Group>
                            <Button  className="mt-4" type="submit" disabled={isLoading} variant="primary">
                                {isLoading ? "Saving..." : "Update Profile"}
                            </Button>
                        </Form>
                    </div>
                </section>
            </Container>
        </>
    );
}
