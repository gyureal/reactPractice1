import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term : '' };
    }

    render() {
        return (
            <div>
                <input 
                value= {this.state.term} // state 값으로 대입
                onChange = {event => this.setState({ term : event.target.value })}
                /> 
            </div>
        )  
    }
}

export default SearchBar;
