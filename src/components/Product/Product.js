import React from "react";

function Product(props) {
  return (
    <div className="product-card">
      <div>{props.product.product_name}</div>
      <div>{props.product.product_price}</div>
      <img src={props.product.image_url} />
      <button>Edit</button>
      <button
        onClick={() => {
          props.delete(props.product.product_id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Product;
