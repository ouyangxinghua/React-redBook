import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './peopleDetail.styl'

class PeopleDetail extends Component {
  state = {
    isFocus: false,
    isStar: false,
    isCollect: false,
    data: {}
  }
  componentDidMount() {
    this.props.hideTabbar(false);
    if (!this.mySwiper4) {
      this.mySwiper4 = new Swiper('#swiper4', {
        resistanceRatio: 0,
        initialSlide: 0,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active',
        },
      })
    }
  }
  componentWillMount(){
    this.setState({
      data: this.props.location.query.data
    })
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleFocus() {
    this.setState({
      isFocus: !this.state.isFocus
    })
  }
  handleStar() {
    var items = this.state.data;
    if (this.state.isStar){
      items.starNum -= 1
    }else{
      items.starNum += 1
    }
    this.setState({
      data: items,
      isStar: !this.state.isStar
    })
  }
  handleZan() {
    var items = this.state.data;
    if (this.state.isCollect){
      items.collect -= 1
    }else{
      items.collect += 1
    }
    this.setState({
      data: items,
      isCollect: !this.state.isCollect
    })
  }
  handleBack(){
    window.history.back()
  }
  render() {
    let item = this.state.data;
    return (
      <div className="people-detail">
        <div className="people-header">
          <img src={[require('../../assets/detail1/arrow.png')]} alt="" className="people-left" 
          onClick={() => this.handleBack()}/>
          <div className="people-avatar">
            <img src={item.avatar} alt="" className="people-right" />
          </div>
          <span>{item.author}</span>
          <div className={this.state.isFocus ? 'people-isfocus stylecomment' : 'people-nofocus stylecomment'}
            onClick={() => this.handleFocus()}>
            {
              this.state.isFocus ? '已关注' : '关注'
            }
          </div>
          <img src={[require('../../assets/detail1/zhuanfa.png')]} alt="" className="people-zhuan" />
        </div>
        <div className="swiper-container" id="swiper4">
          <div className="swiper-wrapper">
            {
              item.detailPic.map((item, index) => {
                return (
                  <div className="swiper-slide" id="scroll" key={index}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="people-message">
          <div className="people-title">
            {item.title}
          </div>
          <div className="people-content">
            {
              item.detailText.map((item, index) => {
                return (
                  <p className="people-content__item" key={index}>
                    {item}
                  </p>
                )
              })
            }
          </div>
          <div className="people-content__date">
            {item.date}
          </div>
        </div>
        {/* <div className="people-comment">
          
        </div> */}
        <div className="bottom-tabbar">
          <div className="bottom-tabbar__input">
            <img src={[require('../../assets/detail1/bi.png')]} alt="" className="bottom-tabbar__icon1" />
            <span>说点什么...</span>
          </div>
          <div className="bottom-tabbar__icons">
            <img src={this.state.isStar ? [require('../../assets/detail1/选中心.png')] : [require('../../assets/detail1/心.png')]} alt="" className="bottom-tabbar__icon"
              onClick={() => this.handleStar()} />
            <span>{item.starNum}</span>
          </div>
          <div className="bottom-tabbar__icons">
            <img src={this.state.isCollect ? [require('../../assets/detail1/select.png')] : [require('../../assets/detail1/noselect.png')]} alt="" className="bottom-tabbar__icon"
              onClick={() => this.handleZan()} />
            <span>{item.collect}</span>
          </div>
          <div className="bottom-tabbar__icons">
            <img src={[require('../../assets/detail1/pinlun.png')]} alt="" className="bottom-tabbar__icon" />
            <span>{item.comment}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleDetail;