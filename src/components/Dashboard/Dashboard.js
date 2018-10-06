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
  render() {
    return (
      <div className="inventory-container">
        {this.state.inventory.map((product, id) => {
          return <Product key={id} product={product} />;
        })}
      </div>
    );
  }
}

export default Dashboard;
