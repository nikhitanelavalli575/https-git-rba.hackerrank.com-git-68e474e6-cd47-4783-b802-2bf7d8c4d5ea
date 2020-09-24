import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "../Home";
import Results from "../SearchResults";
import Books from "../Books";
import PageNotFound from "../../components/PageNotFound";


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
         
            <Route path="/home" component={Home} />
            <Route
              exact
              path="/results/:search_by/:search"
              component={Results}
            />
            <Route exact path="/book/:id/:title" component={Books} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;