import React, { Component } from "react";
import Header from "../Header";
import PopularAuthors from "./PopularAuthors";
import TrendingBooks from "./TrendingBooks";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <PopularAuthors />
          <TrendingBooks />
        </div>
      </div>
    );
  }
}

export default Home;