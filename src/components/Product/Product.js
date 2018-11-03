import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = props => {
  return (
    <div className="product-card">
      <img src={props.product.image_url} />
      <div className="product-info-box">
        <div className="product-info">{props.product.product_name}</div>
        <div className="product-info">${props.product.product_price}</div>
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            props.onEdit(props.product.product_id);
          }}
        >
          <Link to={`/edit/${props.product.product_id}`}>Edit</Link>
        </button>
        <button
          onClick={() => {
            props.delete(props.product.product_id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
