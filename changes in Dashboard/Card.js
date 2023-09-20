import React, { useState } from "react";
import { json } from "./json";
import { useNavigate } from "react-router-dom";


const Card = () => {
  const [showItem, setShowItem] = useState(4);

  const products = json.products; 


  // console.log(products);
  const navigate = useNavigate();

  const showMore = () => {
    setShowItem(showItem + 8);
  };
  
  // const productsDetail = JSON.parse(localStorage.getItem("productsDetail")) || [];


    const addToDash = (id) => {
      // Get the user details from local storage
      const userDetails = JSON.parse(localStorage.getItem("loggedInUser")) || [];
    
      // Assuming the user details contain an "email" property
      const userEmail = userDetails.email;
    
      // Get the selected product
      const selectedProduct = products.find((product) => product.id === id);
    
      if (userEmail && selectedProduct) {
        // Retrieve the user's existing saved products or initialize an empty array
        const userSavedProducts = JSON.parse(localStorage.getItem(userEmail)) || [];
    
        // Add the selected product to the user's saved products
        userSavedProducts.push(selectedProduct);
    
        // Store the updated user saved products back in local storage
        localStorage.setItem(userEmail, JSON.stringify(userSavedProducts));
      }
    };
    

 
  return (
    <div className="container mt-4">
      <h4 style={{ color: "#d51c9a" }}>Products</h4>
      <div className="row d-flex">
        {products.length > 0 ? (
          products.slice(0, showItem).map((product, i) => {
            return (
              <div
                className="card ms-2 mt-2 col-lg-2 m-1"
                key={product.id}
                style={{ width: "13rem" }}
              >
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="products"
                ></img>
                <div className="card-body p-4">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text">Price: ${product.price}</p> */}
                  {/* <p>Only {product.stock} left..</p> */}
                </div>
                <button
                  className="view-button mb-4"
                  onClick={() => navigate(`/viewproduct/${product.id}`)}
                >
                  View Product
                </button>
                <button className="pro-button mb-4" onClick={()=>addToDash(product.id)}>Add to Cart</button>
              </div>
            );
          })
        ) : (
          <h2>No data</h2>
        )}
   
        {showItem < products.length ? (
          <button className="view-button my-4" onClick={showMore}>
            Show More...
          </button>
        ) : (
          <button className="view-button my-4" onClick={()=>setShowItem(10)}>Show Less..</button>
        )}
      </div>
    
    </div>
  );
};

export default Card;