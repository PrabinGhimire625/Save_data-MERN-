import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./../login/login.css";
import { Link } from "react-router-dom";

function Form(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1>{props.type}</h1>

          {props.type === 'Signup' && (
            <div className="input-box">
              <input
                type="text"
                placeholder="username"
                required
              />
              <FaUser className="icon" />
            </div>
          )}
          
          <div className="input-box">
            <input 
              type="email" 
              placeholder="email" 
              required 
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">{props.type}</button>

          <div className="register-link">
            {props.type === 'Signup' ? (
              <Link to="/login" className="signup-btn">
                Already have an account? Login
              </Link>
            ) : (
              <Link to="/signup" className="signup-btn">
                Don't have an account? Signup
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
