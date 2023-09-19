import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if user is authenticated, based on your authentication method
  const isAuthenticated = localStorage.getItem("loggedInUser");

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    navigate("/login");
    return null; // Render nothing until authentication is confirmed
  }

  // Render your dashboard content here for authenticated users
  return (
    <div>
      <h1 className="text-white">Dashboard</h1>
    <button className="btn btn-secondary" onClick={()=>navigate('/card')}>See Products</button>
    </div>
  );
};

export default Dashboard;
