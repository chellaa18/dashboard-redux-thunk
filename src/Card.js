import React, { useState, useContext } from "react";
import { json } from "./json";
import { useNavigate } from "react-router-dom";


const Card = () => {
  const [showItem, setShowItem] = useState(4);
  const [newProductTitle, setNewProductTitle] = useState("");
  const products = json.products; 


  // console.log(products);
  const navigate = useNavigate();

  const showMore = () => {
    setShowItem(showItem + 8);
  };
  // const showLess = ()=>{
  //   setShowItem(showItem - 22);
  // }

 
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
                <button className="pro-button mb-4">Add to Cart</button>
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