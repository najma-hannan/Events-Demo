import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { authenticate } from '../utils';

import ErrorContainer from './ErrorContainer';

const Login = () => {

  const [errors, setErrors] = useState([]);

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/login", data);
      const { token } = response.data;

      authenticate(token);

      window.location.href = "/"
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
    <div className='container mt-4'>
      <div className="col-5 card mx-auto">

        <div className="card-body">
          <h2 className="fs-3">Login</h2>

          <ErrorContainer errors={errors} className={"container mt-1"} />

          <Form className="mt-3" onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" autoComplete='email' placeholder="someone@example.net" name="email" required />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" autoComplete='current-password' placeholder="xxxxxxx" name="password" required />
            </Form.Group>

            <div className="mt-3 d-flex justify-content-end">
              <Button type="submit">Login</Button>
            </div>
          </Form>
        </div>


      </div>
    </div>
  );
};

export default Login;
