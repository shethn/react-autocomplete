import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import PropTypes from 'prop-types';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        cities: PropTypes.array.isRequired
    }

    state = {
        userInput: '',
        suggestions: [],
        isSuggestionSelected: false
    }

    onChange = ( e ) => {
        let { books, cities } = this.props;
        let userInput = e.currentTarget.value;
        let searchString = userInput.toLowerCase();
        let suggestions = [];

        // Populate autocomplete suggestions from books and cities
        if( userInput.length > 2 ) {
            // City autocomplete suggestions
            suggestions = cities.filter( city => city.startsWith( searchString ) );
            // Book title and author autocomplete suggestions
            books.forEach( book => {
                if( book.title.toLowerCase().startsWith( searchString ) ) {
                    suggestions.push( book.title )
                }
                if( book.author.toLowerCase().startsWith( searchString ) ) {
                    suggestions.push( book.author )
                }
            } );
        }

        this.setState( {
            userInput,
            suggestions,
            isSuggestionSelected: false
        } );
    }

    onClick = ( e ) => {
        this.setState( {
            userInput: e.currentTarget.innerText,
            suggestions: [],
            isSuggestionSelected: true
        } );
    }

    render(){
        let { isSuggestionSelected, suggestions, userInput } = this.state;
        let suggestionsList;

        // Display suggestions once user types at least 3 characters
        if( userInput.length > 2 ) {
            // Suggestion selected, show nothing (suggestions = [])
            if( isSuggestionSelected ) {
                suggestionsList = suggestions;
            }
            // Show autocomplete suggestions
            else if( suggestions.length )
            suggestionsList = (
                <ul className="suggestions">
                    {suggestions.map(suggestion =>
                        <li key={suggestion} onClick={this.onClick}>
                            {suggestion}
                        </li>
                    )}
                </ul>
            );
            // No autocomplete suggestions found
            else {
                suggestionsList = (
                    <Alert level="warning" message="No search suggestions" />
                );
            }    
        }
        else {
            suggestionsList = ( 
                <Alert level="info"
                    message="Type at least 3 characters to get suggestions"
                />
            );
        }

        return(
            <Fragment>
                <div id="search" className="form-group">
                    <input type="text"
                        className="form-control rounded-0"
                        placeholder="Enter search here..."
                        value={this.state.userInput}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        autoFocus
                    />
                </div>
                {suggestionsList}
            </Fragment>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        books: state.books,
        cities: state.cities
    }
}

export default connect(mapStateToProps)(Search);