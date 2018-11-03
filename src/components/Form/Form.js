import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

const BASE_URL = "http://localhost:3005";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      price: 0,
      imageURL: "",
      productID: "",
      isEdit: false
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(BASE_URL + `/api/product/${this.props.match.params.id}`)
        .then(response => {
          console.log(response.data);
          const product = response.data[0];
          this.setState({
            productName: product.product_name,
            price: product.product_price,
            imageURL: product.image_url,
            productID: product.product_id,
            isEdit: true
          });
        });
    }
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
      imageURL: "",
      isEdit: false
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
          imageURL: "",
          productID: ""
        })
      );
  };
  onSaveChangesClick = () => {
    axios
      .put(BASE_URL + `/api/product/${this.props.match.params.id}`, {
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
          imageURL: "",
          productID: "",
          isEdit: false
        })
      );
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-main-body">
        <div className="form-container">
          <img src={this.state.imageURL} className="image-display" />
          <label>Image URL</label>
          <input
            value={this.state.imageURL}
            className="image"
            onChange={e => {
              this.onInput(e, "imageURL");
            }}
          />
          <label>Product Name</label>
          <input
            value={this.state.productName}
            className="product-name"
            onChange={e => {
              this.onInput(e, "productName");
            }}
          />
          <label>Price</label>
          <input
            value={this.state.price}
            className="price"
            onChange={e => {
              this.onInput(e, "price");
            }}
          />

          {this.state.isEdit ? (
            <div className="edit-buttons">
              <button className="reset-form" onClick={this.onResetClick}>
                Reset
              </button>
              <button
                className="save-changes"
                onClick={() =>
                  this.onSaveChangesClick(this.props.match.params.id)
                }
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="new-product-buttons">
              <button className="reset-form" onClick={this.onResetClick}>
                Reset
              </button>
              <button className="add-product" onClick={this.onAddProductClick}>
                Add to Inventory
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
