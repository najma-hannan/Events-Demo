import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { authenticate } from '../utils';
import { useNavigate, useRevalidator } from 'react-router-dom';
import ErrorContainer from './ErrorContainer';

const Login = () => {
  const navigate = useNavigate();
  const reavalidator = useRevalidator();

  const [errors, setErrors] = useState([]);

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/login", data);
      const { user, token } = response.data;

      authenticate({ ...user, token });

      reavalidator.revalidate();

      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([error.message]);
      }

      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <ErrorContainer errors={errors} className={"container mt-1"} />

      <Form className="mt-1" onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" autoComplete='email' placeholder="Enter email" name="email" required />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" autoComplete='current-password' placeholder="Enter password" name="password" required />
        </Form.Group>

        <Button variant='primary' type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
