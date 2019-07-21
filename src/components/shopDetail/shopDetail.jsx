import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './shopDetail.styl'

class ShopDetail extends Component {
  state = {

  }
  componentDidMount() {
    this.props.hideTabbar(false)
    if (!this.mySwiper5) {
      this.mySwiper5 = new Swiper('#swipershop', {
        resistanceRatio: 0,
        initialSlide: 0,
        autoHeight: true
      })
    }
  }
  componentWillMount() {
    this.setState({
      data: this.props.location.query && this.props.location.query.data
    })
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleBack() {
    window.history.back()
  }
  render() {
    const item = this.state.data;
    console.log(item)
    return (
      <div className="shopDetail-container">
        <div className="shopDetail-back" onClick={() => this.handleBack()}>
          <img src={[require('../../assets/shopDetail/左箭头.png')]} alt="" />
        </div>
        <div className="shopDetail-zhuan">
          <img src={[require('../../assets/shopDetail/转发.png')]} alt="" />
        </div>
        <div className="swiper-container" id="swipershop">
          <div className="swiper-wrapper">
            {
              item.detailPic.map((item, index) => {
                return (
                  <div className="swiper-slide" id="scrollshop" key={index}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="detail-message">
          <div>
            <div className="detail-message1 margin">限时特价</div>
            <div className="detail-message2 margin">￥{item.price}</div>
            <div className="detail-message3 margin">￥{item.price1}</div>
            <div className="detail-message4 margin">8折</div>
            <div className="detail-message5 margin">包税</div>
            <div className="detail-message5">包邮</div>
          </div>
          <div className="detail-title">
            {item.title}
            <div className="line-clamp1">{item.message}</div>
            <div className="detail-title__right">
              <img src={[require('../../assets/shopDetail/bao.png')]} alt="" className="detail-title__icon" />
              <div>心愿单</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetail;