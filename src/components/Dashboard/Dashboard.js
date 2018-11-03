import React, { Component } from "react";
import axios from "axios";

import Product from "../Product/Product";
import "./Dashboard.css";

const BASE_URL = "http://localhost:3005";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/api/inventory").then(response => {
      this.setState({ inventory: response.data });
    });
  }

  onEditClick = product_id => {
    this.setState({ idToEdit: product_id });
  };

  onDeleteClick = product_id => {
    axios.delete(BASE_URL + `/api/product/${product_id}`).then(response => {
      console.log("response", response);
      if (response.status === 200) {
        const newProducts = this.state.inventory.filter(product => {
          console.log(product);
          return product.product_id !== product_id;
        });
        console.log(newProducts);

        console.log("this.setState");
        this.setState({ inventory: newProducts });
      }
    });
  };
  render() {
    return (
      <div className="inventory-container">
        {this.state.inventory.map((product, product_id) => {
          return (
            <Product
              key={product_id}
              product={product}
              delete={this.onDeleteClick}
              onEdit={this.onEditClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
