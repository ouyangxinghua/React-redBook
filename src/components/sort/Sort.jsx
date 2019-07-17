import React, { Component } from 'react';
import './sort.styl'

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.hideTabbar(false)
  }
  handleback = () => {
    window.history.back();
  }
  componentWillUnmount(){
    this.props.hideTabbar(true)
  }
  render() {
    return (
      <div className="sort-container">
        <div className="sort-header">
          <img src={[require('../../assets/images/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div>分类</div>
        </div>
          <div className="sort-sidebar">
            1
          </div>
        <div className="sort-content">
          nba2
        </div>
      </div>
    );
  }
}

export default Sort;