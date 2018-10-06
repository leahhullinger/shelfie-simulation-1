import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

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
  onDeleteClick = product_id => {
    axios.delete(BASE_URL + `/api/inventory/${product_id}`).then(response => {
      this.setState({ inventory: response.data });
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
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
