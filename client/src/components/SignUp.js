import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user:  {email, password} }),
        mode: 'no-cors',
      });
      const data = await response.json();
      console.log('Signup successful', data);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            autoComplete='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div>
          <label>Password Confirm:</label>
          <input
            type="password"
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
