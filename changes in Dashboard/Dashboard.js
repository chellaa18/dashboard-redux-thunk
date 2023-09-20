import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Check if user is authenticated, based on your authentication method
  // const isAuthenticated = localStorage.getItem("loggedInUser");

  useEffect(() => {
    // Get the user details from local storage
    const userDetails = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    // Assuming the user details contain an "email" property
    const userEmail = userDetails.email;

    // Load selected products from local storage when the component mounts
    const userProducts = JSON.parse(localStorage.getItem(userEmail)) || [];
    setSelectedProducts(userProducts);
  }, []);

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    navigate('/login');
  }

  const deleteProduct = (id) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== id);
    console.log(updatedProducts);
    setSelectedProducts(updatedProducts);

    // Get userEmail again, as it's not in the scope of this function
    const userDetails = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    const userEmail = userDetails.email;

    localStorage.setItem(userEmail, JSON.stringify(updatedProducts)); // Update local storage
  }
   // ...
 

  //  const deleteProduct = (id) => {
  //   console.log(id);
  //   let index = selectedProducts.findIndex((product) => product.id === id);
  
  //   if (index !== -1) {
  //     selectedProducts.splice(index, 1); // Corrected line using splice()
  //     localStorage.setItem(userEmail, JSON.stringify(selectedProducts)); // Corrected localStorage key
  //   }
  // }
  // Render your dashboard content here for authenticated users
  return (
    <div>
      <h1 className="text-white">Dashboard</h1>
    <button className="btn btn-secondary" onClick={()=>navigate('/card')}>See Products</button>
    <button className="btn btn-secondary" onClick={()=>logOut()}>Log Out</button>

    <div>{selectedProducts.length > 0 ? (
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Actions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td><button onClick={()=>deleteProduct(product.id)}>Delete</button></td>
              <td><button>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No selected products available.</p>
    )}</div>
    </div>
  );
};

export default Dashboard;
