import React, { Component } from 'react';
import './shoipCart.styl'

class ShopCart extends Component {
  state = { 
    isAdmin: true
  }
  componentDidMount() {
    this.props.hideTabbar(false)
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleback(){
    window.history.back();
  }
  handleAdmin(){
    this.setState({
      isAdmin: !this.state.isAdmin
    })
  }
  render() { 
    return ( 
      <div className="shopCart-container">
        <div className="shopCart-header">
          <img src={[require('../../assets/detail1/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div className="shopCart-header__middle">购物车</div>
          <div className="shopCart-header__right" onClick={this.handleAdmin.bind(this)}>{this.state.isAdmin ? '管理' : '完成'}</div>
        </div>
        <div className="shopCart-tab">
          
        </div>
      </div>
    );
  }
}
 
export default ShopCart;