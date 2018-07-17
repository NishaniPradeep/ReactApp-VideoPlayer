import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'hello' };
    }

    render = () => {
        return (
            <input
                value={this.state.term}
                onChange={this.onFieldChange}
            />
        );
    }
    onFieldChange = (event) => {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

}

export default SearchBar;