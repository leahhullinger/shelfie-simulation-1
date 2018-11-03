import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

const BASE_URL = "http://localhost:3005";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }
  componenetDidMount() {
    axios.get(this.props.match.params.id).then(product => {
      this.setState({ product: product.data });
    });
  }
  render() {
    return (
      <div className="form-main-body">
        <div className="form-container">
          <img className="image-display" />
          <label>Image URL</label>
          <input
            className="image"
            onChange={e => {
              this.onInput(e, "imageURL");
            }}
          />
          <label>Product Name</label>
          <input
            className="product-name"
            onChange={e => {
              this.onInput(e, "productName");
            }}
          />
          <label>Price</label>
          <input
            className="price"
            onChange={e => {
              this.onInput(e, "price");
            }}
          />
          <div className="button-container">
            <button className="reset-form" onClick={this.onResetClick}>
              Reset
            </button>
            <button className="add-product" onClick={this.onAddProductClick}>
              Add To Inventory
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
