import React, { Component } from 'react';

class ShopList extends Component {
  state = {  }
  render() { 
    const { list } = this.props;
    console.log('render')
    console.log(list)
    return ( 
      <div className="shoplist-container">
        shoplist
      </div>
    );
  }
}
 
export default ShopList;