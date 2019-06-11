import React, { Component } from 'react';
import './App.scss';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      isLoading: false
    };

    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    this.setState({ isLoading: true }, () => {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
          businesses: businesses,
          isLoading: false
        });
      });
    });


  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          { this.state.isLoading ? <p>Loading...</p> : <BusinessList businesses={this.state.businesses} /> }

      </div>
    );
  }
}

export default App;
