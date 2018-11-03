import React, { Component } from "react";
import Header from "./components/Header/Header";
import Routes from "./routes";

import "./App.css";
const BASE_URL = "http://localhost:3005";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
