// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import "./../login/login.css";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";



// function login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate =useNavigate();
//   axios.defaults.withCredentials=true;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/auth/login", {email, password })
//       .then((res) => {
//         console.log(res.data);
//         //navigate('/login');
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="container">
//       <div className="wrapper">
//         <form action="" onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)}/>
//             <MdEmail className="icon" />
//           </div>
//           <div className="input-box">
//             <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/>
//             <FaLock className="icon" />
//           </div>
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <a href="#">Forgot Password?</a>
//           </div>
//           <button type="submit">Login</button>
//           <div className="register-link">
//             <Link to="/signup" className="signup-btn">
//             Don't have an account ? Register
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default login;
import Form from '../Form/Form.jsx'

function Login(){
  return(
    <Form/>
  )

}

export default Login