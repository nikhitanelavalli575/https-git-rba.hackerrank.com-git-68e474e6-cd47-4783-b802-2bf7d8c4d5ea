import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import data from "../../data/popular_author_list.json";

export class PopularAuthors extends Component {
  render() {
    var popular = data.map(function(popular_artist) {
      // should display popular artist
      return <div key={popular_artist.author} />;
    });

    return (
      <div className="trending-container">
        <h2>Popular Authors</h2>
        <hr />
        <div className="word-table" />
      </div>
    );
  }
}

export default PopularAuthors;