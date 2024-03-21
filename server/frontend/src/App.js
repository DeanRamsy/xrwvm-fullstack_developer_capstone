import LoginPanel from "./components/Login/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register"; // Import the Register component


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} /> {/* Add a route for Register component */}
    </Routes>
  );
}
export default App;
