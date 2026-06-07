import { useState } from 'react';

export default function Login({
  onLogin,
  onToggle,
}) {
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      name: email.split('@')[0],
    };

    localStorage.setItem(
      'currentUser',
      JSON.stringify(user)
    );

    onLogin(user);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <p>
          Don't have an account?
        </p>

        <button
          onClick={onToggle}
          className="auth-link"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}