import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit = (term) => {
    this.setState({ term: term });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
