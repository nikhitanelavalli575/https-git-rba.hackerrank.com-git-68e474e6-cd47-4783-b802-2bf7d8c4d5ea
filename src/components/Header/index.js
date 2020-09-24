import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import title from "./../../img/title.png";


export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search_word: "",
      search_by: "title"
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  onChange(event) {
    // should set state based on target value
  }

  handleChange(event) {
    //  should set state based on target value
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.history.push(
        this.state.search_word
          ? `/results/${this.state.search_by}/${this.state.search_word}`
          : `${this.props.location.pathname}`
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="container-header">
            <NavLink to={"/home"}>
              <img className="title" src={title} alt="title" />
            </NavLink>
          </div>
          <br />
          <div className="search_elements">
            <select
              value={this.state.search_by}
              className="search-dropdown"
            >
              <option value="title">By Title</option>
              <option value="author">By Author</option>
            </select>
            <input
              type="text"
              placeholder={"Search by " + this.state.search_by}
              autoComplete="off"
              autofill="off"
              id="searchbar"
              onKeyPress={this.handleKeyPress}
              className="textbox textbox-search"
            />
            <NavLink
              to={
                this.state.search_word
                  ? `/results/${this.state.search_by}/${this.state.search_word}`
                  : `${this.props.location.pathname}`
              }
            >
              <div className="search-button" />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);