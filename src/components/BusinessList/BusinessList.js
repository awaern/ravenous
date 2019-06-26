import React from 'react';
import './BusinessList.scss';
import Business from './../Business/Business';

class BusinessList extends React.Component {
  render() {

    let list;

    if (this.props.isLoading) {
      list = <p>Loading...</p>
    } else if (this.props.businesses) {
      list = this.props.businesses.map((business, index) => {
        return <Business key={business.id} business={business}/>
      });
    } else {
      list = <p>Ingen träff</p>
    }

    return (
      <div className="BusinessList">
        {list}
      </div>
    );

  }
}

export default BusinessList;
