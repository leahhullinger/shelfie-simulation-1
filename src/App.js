import React, { Component } from "react";
import axios from "axios";

import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

import "./App.css";
const BASE_URL = "http://localhost:3005";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
