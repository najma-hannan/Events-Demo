import React, { useState } from 'react';

import axios from 'axios';
import ErrorContainer from './ErrorContainer';
import { authenticate } from '../utils';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
  const [errors, setErrors] = useState([]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/signup", { user: payload });
      const { token } = await response.data;

      authenticate(token);

      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([error.message])
      }
      console.error(error);
    }
  };

  return (
    <div className="container py-4">
      <div className="card col-5 mx-auto">
        <div className="card-body">
          <h2 className="fs-3">Sign Up</h2>

          <ErrorContainer className="container mt-1" errors={errors} />

          <Form className="mt-3" onSubmit={handleSignUp}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                autoComplete='name'
                placeholder="Jamie Earl Jones"
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name={"email"}
                autoComplete='email'
                placeholder='someone@example.net'
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoComplete='current-password'
                name={"password"}
                placeholder='xxxxxxx'
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                autoComplete='current-password'
                name={"password-confirmation"}
                placeholder="xxxxxxx"
                required
              />
            </Form.Group>

            <div className="mt-3 d-flex justify-content-end">
              <Button type="submit">Sign Up</Button>
            </div>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
