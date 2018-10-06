import React from "react";

function Product(props) {
  return (
    <div className="product-card">
      <div>{props.product.product_name}</div>
      <div>{props.product.product_price}</div>
      <img src={props.product.image_url} />
    </div>
  );
}

export default Product;
