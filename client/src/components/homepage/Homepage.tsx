import React, { useState } from 'react';
import './Homepage.scss';

const Homepage: React.FC = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Send a POST request to the auth endpoint
      const response = await fetch('http://localhost:4200/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.text();

      if (result.trim() === 'true') {
        // Redirect to the dashboard if authentication is successful
        window.location.href = 'http://www.google.com';
      } else {
        alert('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <main>
        <h1>Login to Continue</h1>
        <form id="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={formState.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formState.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Homepage;
