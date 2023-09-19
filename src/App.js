import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Card from "./Card";
import Registration from "./Registration";
import Login from "./Login";
import Dashboard from "./Dashboard";

function PrivateRoute({ element }) {
  const isAuthenticated = localStorage.getItem("loggedInUser"); // Your authentication logic here

  if (isAuthenticated) {
    return element;
  } else {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" />;
  }
}

function App() {
  return (
    <div className="App bg-dark">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </div>
  );
}

export default App;
