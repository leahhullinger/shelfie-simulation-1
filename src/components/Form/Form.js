import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      price: 0,
      imageURL: ""
    };
  }
  onInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  onResetClick = () => {
    this.setState({
      productName: "",
      price: 0,
      imageURL: ""
    });
  };

  onAddProductClick = () => {
    axios
      .post(BASE_URL + "/api/product", {
        product_name: this.state.productName,
        product_price: this.state.price,
        image_url:
          this.state.imageURL ||
          "https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/c/c1/Image-placeholder.png/revision/latest/scale-to-width-down/640?cb=20180619164238"
      })
      .then(
        this.setState({
          productName: "",
          price: 0,
          imageURL: ""
        })
      );
  };

  render() {
    return (
      <div className="form-container">
        <h2>Add New Product</h2>

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
        <div>
          <button className="reset-form" onClick={this.onResetClick}>
            Reset
          </button>
          <button className="add-product" onClick={this.onAddProductClick}>
            Add To Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
