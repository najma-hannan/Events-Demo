import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    // Handle log in logic here
    console.log('Log in form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
