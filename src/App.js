import React, { Component } from "react";
import Header from "./shared/Header";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

//components
import RentalList from "./components/Rental/RentalList";
import RentalDetail from "./components/Rental/RentalDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={RentalList} />
            <Route path="/rental/:id" component={RentalDetail} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
