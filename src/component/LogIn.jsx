import React from 'react';
import '/src/App.css'; // Make sure this is imported

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>TechVerse Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="login-footer">© 2025 TechVerse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
