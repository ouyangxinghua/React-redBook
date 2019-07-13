import React, { Component } from 'react';
import './found.styl';
import CardList from '../cardList/cardList'

class Found extends Component {
  state = {}
  render() {
    return (
      <div className="Found-container">
        <CardList />
      </div>
    );
  }
}

export default Found