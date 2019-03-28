import React, { Component } from "react";
import Header from "./shared/Header";
import "./App.css";

//components
import Rentalcard from "./components/Rental/RentalCard";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <section id="rentalListing">
            <h1 className="page-title">Your Home All Around the World</h1>
            <div className="row">
              <Rentalcard />
              <Rentalcard />
              <Rentalcard />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
