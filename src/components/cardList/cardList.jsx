import React, { Component } from 'react';
import './cardList.styl'
import PeopleCard from '../../common/peopleCard/peopleCard'

class CardList extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    const { list, type } = this.props;
    return (
      <div className="list-container">
        <div className="left">
          {
            list.leftlist.map((item, index) => {
              return (
                <PeopleCard item={item} type={type} key={index} />
              )
            })
          }
        </div>
        <div className="right">
          {
            list.rightList.map((item, index) => {
              return (
                <PeopleCard item={item} type={type} key={index} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default CardList;