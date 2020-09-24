import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestSearchData } from "./actions.js";

export class Results extends Component {
  componentDidMount() {
    var data = {};
    data.search_word = this.props.match.params.search;
    data.search_by = this.props.match.params.search_by;
    this.props.requestSearchData(data);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.search !== nextProps.match.params.search ||
      this.props.match.params.search_by !== nextProps.match.params.search_by
    ) {
      var data = {};
      data.search_word = nextProps.match.params.search;
      data.search_by = nextProps.match.params.search_by;
      this.props.requestSearchData(data);
    }
  }

  render() {
    var results = this.props.data;

    var search_title =
      results && results.num_found !== 0 ? (
        <h2>Search Results for "{this.props.match.params.search}"</h2>
      ) : (
        <h2>0 Results found for "{this.props.match.params.search}"</h2>
      );

    var search_headers =
      results && results.num_found !== 0 ? (
        <tr className="trending-table-heading">
          <th>Title</th>
          <th className="search-results-heading-column">Author</th>
          <th>Date</th>
        </tr>
      ) : (
        <tr>
          <td>No books match your search query</td>
        </tr>
      );
    if (results && results.num_found !== 0) {
      // should display search results with title year and author name
      var search_results = results.docs.map(function(result) {
        if (result.edition_count) {
          return (
            <tr key={result.key}>
              <td>
                <NavLink
                  className="device-link"
                  to={`/book/${result.edition_key[0]}/${result.title}`}
                >
                  {" "}
                  <h2 />
                </NavLink>
              </td>
              <td>
                <span className="search-results-heading-column" />
              </td>
              <td>
                <span />
              </td>
            </tr>
          );
        }
      });
    }

    var search_results_page = this.props.isFetching ? (
      <h1></h1>
    ) : (
      <div>
        {search_title}
        <div className="search-results">
          <table className="trending-table">
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    );

    return (
      <div>
        <Header />
        <br />
        {search_results_page}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.search.search_data,
  isFetching: state.search.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestSearchData }, dispatch);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Results)
);