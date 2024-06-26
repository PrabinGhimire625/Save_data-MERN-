import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Signup from "./signup/Signup.jsx";
import Navbar from "./navbar/navbar.jsx";
import Login from "./login/login.jsx"; // Ensure correct import case
import Home from "./Home/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;
