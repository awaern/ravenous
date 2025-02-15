import React from 'react'
import './SearchBar.scss';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
        key={sortByOptionValue}
        className={this.getSortByClass(sortByOptionValue)}
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
        {sortByOption}
      </li>;
    });

  }
  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});

    if(this.state.term || this.state.location) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }

  }
  handleTermChange(event) {
    this.setState({term: event.target.value});
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  render() {
    return (
      <form action="#" className="SearchBar" onSubmit={this.handleSearch}>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange} />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <button type="submit">Let's Go</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
