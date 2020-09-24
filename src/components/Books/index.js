import React, { Component } from "react";
import { requestBookData } from "./actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import default_cover from "./../../img/default_cover.jpg";


export class Books extends Component {
  componentDidMount() {
    this.props.requestBookData(this.props.match.params.id);
  }

  // Should display book details such as title, author, cover image, publish date and publisher

  render() {
    let results = Object.assign({}, this.props.data);
    if (results && Object.keys(results).length != 0) {
      var book_details = Object.keys(results).map(
        function(key) {
          var books = {};
          books.id = this.props.match.params.id;
          books.title = results[key]["title"];
          return (
            <div className="book" key={key}>
              <div className="book-cover">
                <img
                  className="cover-image"
                  src=""
                />
              </div>
              <div className="book-content">
                <h1></h1>
                <h3>
                  by                  
                </h3>
                <br />
              </div>
              <div className="book-content">
                <table>
                  <tbody>
                    <tr>
                      
                        <td>
                          <strong>Publish Date</strong>
                        </td>
                        <td>
                         
                        </td>
                      
                    </tr>
                    <tr>
                    
                        <td>
                          <strong> Publishers</strong>
                        </td>
                        <td>
                  
                        </td>
                    
                    </tr>
                    <tr>
                      
                        <td>
                          <strong>Number of pages</strong>
                        </td>
                        <td>
                         
                        </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        }.bind(this)
      );
    }

// should display book details or loading screen based on isFetching
    var books_page = this.props.isFetching ? (
      <h1></h1>
    ) : (
      <div></div>
    );

    return (
      <div>
        <Header />
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.book.book_data,
  isFetching: state.book.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestBookData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);