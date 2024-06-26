import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./login.css";
import { Link } from "react-router-dom";
function login() {
  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <Link to="/signup" className="signup-btn">
            Don't have an account ? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
