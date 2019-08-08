import React, { Component } from 'react';
import './shopCart.styl'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile';

class ShopCart extends Component {
  state = {
    totalPrice: 0,
    isAdmin: true,
    allSelect: false,
    list: []
  }
  componentWillMount() {
    this.setState({
      list: (JSON.parse(localStorage.getItem('list')) && JSON.parse(localStorage.getItem('list'))) || []
    })
  }
  componentDidMount() {
    this.props.hideTabbar(false)
    this.caclTotal()
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleback() {
    window.history.back()
  }
  handleAdmin() {
    this.setState({
      isAdmin: !this.state.isAdmin
    })
  }
  handleCancle() {
    this.successToast()
    let newList = JSON.parse(localStorage.getItem('list'))
    if (this.state.allSelect) {
      newList = [];
      localStorage.setItem('list', JSON.stringify(newList))
    } else {
      var newArr = newList.filter(item => {
        return item.select === false
      })
      localStorage.setItem('list', JSON.stringify(newArr))
    }
    this.caclTotal()
  }
  handleSelect = () => {
    const List = JSON.parse(localStorage.getItem('list'))
    List.forEach((item) => {
      item.select = !this.state.allSelect
    })
    this.setState({
      allSelect: !this.state.allSelect
    },
      localStorage.setItem('list', JSON.stringify(List))
    )
    this.caclTotal()
  }
  uniqSelect(index) {
    const newList = JSON.parse(localStorage.getItem('list'))
    newList[index].select = !newList[index].select;
    let isAll = newList.some(item => {
      return item.select === false
    })
    if (isAll) {
      this.setState({
        allSelect: false
      })
    } else {
      this.setState({
        allSelect: true
      })
    }
    localStorage.setItem('list', JSON.stringify(newList))
    this.caclTotal()
  }
  addNum(index) {
    const newList = JSON.parse(localStorage.getItem('list'))
    newList[index].num = newList[index].num + 1;
    localStorage.setItem('list', JSON.stringify(newList))
    this.caclTotal()
  }
  reduceNum(index) {
    const newList = JSON.parse(localStorage.getItem('list'))
    if (newList[index].num === 1) {
      newList[index].num = 1
    } else {
      newList[index].num = newList[index].num - 1
    }
    localStorage.setItem('list', JSON.stringify(newList))
    this.caclTotal()
  }
  caclTotal() {
    const list = JSON.parse(localStorage.getItem('list')) || []
    const filter = list.filter((item) => {
      return item.select === true
    })
    const total = filter.map((item) => {
      return item.price * item.num
    })
    var totalPrice = 0
    for (let i = 0; i < total.length; i++) {
      totalPrice += total[i]
    }
    this.setState({
      totalPrice: totalPrice
    })
  }
  successToast() {
    Toast.success('删除成功', 1);
  }
  render() {
    const { isAdmin } = this.state;
    const list = JSON.parse(localStorage.getItem('list')) || [];
    let len = list.length;
    return (
      <div className="shopCart-container">
        <div className="shopCart-header">
          <img src={[require('../../assets/detail1/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div className="shopCart-header__middle">购物车</div>
          <div className="shopCart-header__right" onClick={this.handleAdmin.bind(this)}>{this.state.isAdmin ? '管理' : '完成'}</div>
        </div>
        {
          len === 0 ?
            <div className="noCart">
              <img src={[require("../../assets/images/nocart.png")]} alt="" />
            </div> :
            <div>
              <div className="shopCart-content">
                {
                  list.map((item, index) => {
                    return (
                      <div className="content-items" key={index}>
                        <div className="content-select"
                          onClick={() => this.uniqSelect(index)}>
                          <div className={list[index] && list[index].select ? "shop-select shop-isSelect" : "shop-select"}></div>
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
                                style={list[index].num === 1 ? { opacity: 0.3 } : {}}
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
                {
                  !isAdmin ? <div className="shopCart-cancle"
                    onClick={this.handleCancle.bind(this)}>
                    删除
                  </div> :
                    <div>
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
                }
              </div>
            </div>
        }
      </div>
    );
  }
}

export default withRouter(ShopCart);