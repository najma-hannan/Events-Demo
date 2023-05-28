import React, { useState } from 'react';

import axios from 'axios';
import ErrorContainer from './ErrorContainer';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../utils';

const SignUp = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("/signup", { user: payload });
      const { token } = await response.data;

      authenticate(token);

      navigate("/");
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
    <div>
      <h2>Sign Up</h2>
      <ErrorContainer className="container mt-1" errors={errors} />

      <form className="mt-1" onSubmit={handleSignUp}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            autoComplete='name'
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name={"email"}
            autoComplete='email'
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            autoComplete='current-password'
            name={"password"}
            required
          />
        </div>
        <div>
          <label>Password Confirm:</label>
          <input
            type="password"
            autoComplete='current-password'
            name={"password-confirmation"}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
