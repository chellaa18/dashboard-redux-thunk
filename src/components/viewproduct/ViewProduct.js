import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { json } from "../../assets/json/json";

export const ViewProduct = () => {
  const naviagte = useNavigate();
  const products = json.products;
  const params = useParams();

  //finding the params ID in json object
  const product = products.find(
    (product) => product.id.toString() === params.id
  );

  return (
    <div className="container vh-100">
      <div className="row d-flex justify-content-center">
        <h2 className="text-white">
          {" "}
          <span style={{ color: "#d51c9a" }}>Product ID: </span>
          {params.id}
        </h2>
        <div className="card ms-2 mt-2 col-lg-3 m-1" key={product.id}>
          <img
            src={product.images[0]}
            className="card-img-top"
            alt="products"
          ></img>
          <div className="card-body p-4">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p>Only {product.stock} left..</p>
          </div>
          <button
            className="view-button mb-4"
            onClick={() => naviagte("/card")}
          >
            Go back
          </button>
          <button className="pro-button mb-4">Buy</button>
        </div>
      </div>
    </div>
  );
};
