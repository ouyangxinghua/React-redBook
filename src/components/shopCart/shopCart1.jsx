import React, { Component } from 'react';
import './shopCart.styl'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile';

class ShopCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalPrice: 0,
      isAdmin: true,
      allSelect: false,
      list: []
    }
  }
  componentDidMount() {
    this.props.hideTabbar(false)
    this.setState({
      list: this.props.shopCarts
    })
    this.caclTotal()
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleback() {
    window.history.back()
  }
  componentWillReceiveProps(){
    this.setState({
      list: this.props.shopCarts
    })
  }
  handleAdmin() {
    this.setState({
      isAdmin: !this.state.isAdmin
    })
  }
  handleCancle() {
    this.successToast()
    let aa = JSON.parse(JSON.stringify(this.state.list))
    aa.map((item, index) => {
      if (item.select) {
        aa.splice(index, 1)
      }
      return false
    })
    console.log(this.state.list)
    this.setState({
      list: aa
    })
  }
  handleSelect = () => {
    const List = JSON.parse(JSON.stringify(this.state.list));
    List.forEach((item) => {
      item.select = !this.state.allSelect
    })
    this.setState({
      // list: List,
      allSelect: !this.state.allSelect
    },() => {
      this.props.allselect(List)
    })
    this.caclTotal()
  }
  uniqSelect(index) {
    const newList = JSON.parse(JSON.stringify(this.state.list));
    newList[index].select = !newList[index].select;
    this.props.select(newList)
    // this.setState({
    //   list: newList
    // })
    var isAll = newList.some(item => {
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
    this.caclTotal()
  }
  addNum(e,index) {
    e.stopPropagation();
    const newList = JSON.parse(JSON.stringify(this.state.list));
    newList[index].num = newList[index].num + 1;
    // this.props.addShopNum(newList)
    console.log(this.props.shopCarts[index])
    this.setState({
      list: newList
    })
    this.caclTotal()
  }
  reduceNum(e,index) {
    e.stopPropagation();
    const newList = JSON.parse(JSON.stringify(this.state.list));
    if (newList[index].num === 1) {
      this.props.reduceShopNum(newList)
      // this.setState({
      //   list: newList
      // })
    } else {
      newList[index].num = newList[index].num - 1
      this.props.reduceShopNum(newList)
      // this.setState({
      //   list: newList
      // })
    }
    this.caclTotal()
  }
  caclTotal() {
    const newList = JSON.parse(JSON.stringify(this.state.list))
    const filter = newList.filter((item) => {
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
    const { list, isAdmin } = this.state
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
                          <div className={this.state.list[index] && this.state.list[index].select ? "shop-select shop-isSelect" : "shop-select"}></div>
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
                                style={this.state.list[index].num === 1 ? { opacity: 0.3 } : {}}
                                onClick={(e) => this.reduceNum(e,index)}>
                                <img src={[require('../../assets/images/jianhao.png')]} alt="" />
                              </div>
                              <div className="orderNum">{item.num}</div>
                              <div className="reduceOrder"
                                onClick={(e) => this.addNum(e,index)}>
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