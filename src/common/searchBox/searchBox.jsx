import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import './searchBox.styl'

class searchBox extends Component {
  state = {  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id)
  }
  render() { 
    console.log(this.props)
    return ( 
      <div className="search-container">
        search
      </div>
    );
  }
}
export default searchBox