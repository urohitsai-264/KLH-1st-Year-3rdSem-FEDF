import { useState } from 'react';

export default function Signup({
  onSignup,
  onToggle,
}) {
  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
    };

    localStorage.setItem(
      'currentUser',
      JSON.stringify(user)
    );

    onSignup(user);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="auth-input"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="auth-input"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="auth-input"
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?
        </p>

        <button
          onClick={onToggle}
          className="auth-link"
        >
          Login
        </button>
      </div>
    </div>
  );
}