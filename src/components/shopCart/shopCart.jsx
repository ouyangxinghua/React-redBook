import React, { Component } from 'react';
import './shopCart.styl'
import { withRouter } from 'react-router-dom'

class ShopCart extends Component {
  state = {
    totalPrice: 0,
    isAdmin: true,
    allSelect: true,
    list: [
      {
        id: '01',
        title: '西班牙 你的皮肤极度缺水',
        message: "花颜悦色礼盒水乳液洁面素颜霜水保湿护肤套装",
        pic: "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/108652/2019/0614/9/a4671978-1215-4ad4-a412-1fe2151da864_218x274_70.jpg",
        price: 49,
        num: 1,
        select: false
      },
      {
        id: '01',
        title: '你的皮肤极度缺水',
        message: "水乳液洁面素颜霜水保湿护肤套装",
        pic: "//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/108652/2019/0614/9/a4671978-1215-4ad4-a412-1fe2151da864_218x274_70.jpg",
        price: 149,
        num: 1,
        select: false
      }
    ]
  }
  componentDidMount() {
    console.log(this.props)
    this.props.hideTabbar(false)
    const total = this.state.list.map((item) => {
      return item.price * item.num
    })
    for(let i = 0;i < total.length - 1; i++){
       var aa = 0;
       aa = aa + total[i]
    }
    console.log(aa)
    this.setState({
      totalPrice: 0
    })
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleback() {
    window.history.go(-2)
  }
  handleAdmin() {
    this.setState({
      isAdmin: !this.state.isAdmin
    })
  }
  handleSelect = () => {
    this.setState({
      allSelect: !this.state.allSelect
    })
  }
  uniqSelect(index) {
    const newList = this.state.list
    newList[index].select = !this.state.list[index].select
    this.setState({
      list: newList
    })
  }
  addNum(index) {
    const newList = this.state.list
    newList[index].num = this.state.list[index].num + 1
    this.setState({
      list: newList
    })
  }
  reduceNum(index) {
    const newList = this.state.list
    if (this.state.list[index].num === 1) {
      this.setState({
        list: newList
      })
    } else {
      newList[index].num = this.state.list[index].num - 1
      this.setState({
        list: newList
      })
    }
  }
  render() {
    const { list } = this.state
    return (
      <div className="shopCart-container">
        <div className="shopCart-header">
          <img src={[require('../../assets/detail1/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div className="shopCart-header__middle">购物车</div>
          <div className="shopCart-header__right" onClick={this.handleAdmin.bind(this)}>{this.state.isAdmin ? '管理' : '完成'}</div>
        </div>
        <div className="shopCart-content">
          {
            list.map((item, index) => {
              return (
                <div className="content-items" key={index}>
                  <div className="content-select"
                    onClick={() => this.uniqSelect(index)}>
                    <div className={this.state.list[index].select ? "shop-select shop-isSelect" : "shop-select"}></div>
                  </div>
                  <div className="content-pic">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="content-right">
                    <div className="content-right__top">
                      <p className="content-right__title">{item.title}</p>
                      <p>{item.message}</p>
                    </div>
                    <div className="content-right__bottom">
                      <div className="content-right__price">￥{item.price}</div>
                      <div className="content-right__operate">
                        <div className="addOrder"
                        style={this.state.list[index].num === 1 ? {opacity: 0.3} : {}}
                          onClick={() => this.reduceNum(index)}>
                          <img src={[require('../../assets/images/jianhao.png')]} alt="" />
                        </div>
                        <div className="orderNum">{item.num}</div>
                        <div className="reduceOrder"
                          onClick={() => this.addNum(index)}>
                          <img src={[require('../../assets/images/jiahao.png')]} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="shopCart-tab">
          <div className="shopCart-tab__left"
            onClick={this.handleSelect}>
            <div className={this.state.allSelect ? "shop-select shop-isSelect" : "shop-select"}></div>
            <p>全选</p>
          </div>
          <div className="shopCart-tab__right">
            结算
          </div>
          <div className="shopCart-center">
            <div className="shopCart-center__top">
              总计: <span>￥{this.state.totalPrice}</span>
            </div>
            <div className="shopCart-center__bottom">
              免运费
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShopCart);