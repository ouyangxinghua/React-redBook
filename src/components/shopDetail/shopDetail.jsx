import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './shopDetail.styl'
import { Toast } from 'antd-mobile';

class ShopDetail extends Component {
  state = {}
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
      data: this.props.location.state && this.props.location.state.data,
      shopNum: (JSON.parse(localStorage.getItem('list')) && JSON.parse(localStorage.getItem('list')).length) || 0
    })
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleBack() {
    window.history.back()
  }
  NavToCart = () => {
    this.props.history.push({
      pathname: '/shopcart'
    })
  }
  successToast() {
    Toast.success('添加购物车成功', 1.5);
  }
  addToCart(data) {
    this.successToast()
    let listItem = {
      id: data.goodId,
      title: data.title,
      message: data.message,
      pic: data.pic,
      price: data.price,
      num: 1,
      select: false
    }
    let list = JSON.parse(localStorage.getItem('list')) || []
    list.push(listItem)
    localStorage.setItem('list', JSON.stringify(list))
    let shopNum = (JSON.parse(localStorage.getItem('list')) && JSON.parse(localStorage.getItem('list')).length) || 0;
    this.setState({
      shopNum: shopNum
    })
  }
  render() {
    const item = this.state.data;
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
          <div className="detail-message__flex">
            <div className="detail-message1 margin">限时特价</div>
            <div className="detail-message2 margin">￥{item.price}</div>
            <div className="detail-message3 margin">￥{item.price1}</div>
            <div className="detail-message4 margin">8折</div>
            <div className="detail-message5 margin">包税</div>
            <div className="detail-message5">包邮</div>
          </div>
          <div className="detail-title">
            <p className="line-clamp1">{item.title}</p>
            <p className="line-clamp2">{item.message}</p>
            <div className="detail-title__right">
              <img src={[require('../../assets/shopDetail/bao.png')]} alt="" className="detail-title__icon" />
              <div>心愿单</div>
            </div>
          </div>
        </div>
        <div className="detail-center">
          <img src={[require('../../assets/shopDetail/bottom.png')]} alt="" />
        </div>
        <div className="shop-carttab">
          <div className="shop-carttab__left">
            <div className="shop-left__icon">
              <img src={[require('../../assets/shopDetail/kefu.png')]} alt="" />
              <span>客服</span>
            </div>
            <div className="shop-left__icon">
              <img src={[require('../../assets/shopDetail/store.png')]} alt="" />
              <span>店铺</span>
            </div>
            <div className="shop-left__icon shopCart-num1" onClick={this.NavToCart}>
              <img src={[require('../../assets/shopDetail/cart.png')]} alt="" />
              <span>购物车</span>
              {
                this.state.shopNum !== 0 ?
                <div className="shopCart-num">{this.state.shopNum}</div> : <div></div>
              }
            </div>
          </div>
          <div className="shop-carttab__right">
            <div className="shop-operate__tab1" onClick={() => this.addToCart(item)}>
              加入购物车
            </div>
            <div className="shop-operate__tab2">
              立即购买
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetail;