import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render = () => {
    return (
      <div className="searchBarControl">
        <div className="searchBar">
          <input
            className="searchField"
            style={{ width: 35 + "em" }}
            value={this.state.term}
            onChange={this.onFieldChange}
          />
          <button
            onClick={this.onButtonPress}
            className="searchField btn btn-default btn-sm"
          >
            <span className="glyphicon glyphicon-search" /> Search
          </button>
        </div>
      </div>
    );
  };
  onFieldChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };
  onButtonPress = event => {
    this.props.onSearchTermChange(this.state.term);
    // this.setState({ term: event.target.value })
  };
}

export default SearchBar;
