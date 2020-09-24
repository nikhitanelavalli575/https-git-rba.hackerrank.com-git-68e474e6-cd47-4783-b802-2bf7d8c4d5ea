import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/popular_book_list.json";

export class TrendingBooks extends Component {
  render() {

// should display trening books
    var trending = data.map(function(trending_release) {
      return (
        <div key={trending_release.id}>
          
        </div>
      );
    });

    return (
      <div className="trending-container">
        <h2>Trending Books</h2>
        <hr />
        <div className="word-table"></div>
      </div>
    );
  }
}

export default TrendingBooks;