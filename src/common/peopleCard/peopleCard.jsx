import React, { Component } from 'react';
import './peopleCard.styl'

class PeopleCard extends Component {
  state = { 
    isStar: true
  }
  isStar() {
    this.setState({
      isStar: !this.state.isStar
    })
  }
  render() { 
    console.log('people')
    const { item ,type } = this.props;
    const { isStar } = this.state;
    return ( 
      <div className="card-container">
        <div className="card-pic">
          <img src={item.headPic} alt="" className="headPic"/>
          <img src={[require("../../assets/images/播放.png")]} alt="" className="isVideo" style={ item.isVideo ? {} : {display: 'none'}}/>
        </div>
        <div className="card-bottom">
          <div className="title">
            {item.title}
          </div>
          <div className="bottom">
            <div className="avatar">
              <img src={item.avatar} alt=""/>
            </div>
            <div className="name">
              {item.author}
            </div>
            <div className="star" onClick={() => {this.isStar()}}>
              <img src={isStar ? [require("../../assets/images/心.png")] : [require("../../assets/images/选中心.png")]} alt=""/>
              <span>{item.starNum}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleCard