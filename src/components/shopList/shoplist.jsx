import React, { Component } from 'react';
import './shoplist.styl'
import { withRouter } from 'react-router-dom'

class ShopList extends Component {
  state = {}
  handleTodetail = (url , index) => {
    this.props.history.push({
      pathname: url,
      state: {data: this.props.list[index]}
    })
  }
  render() {
    const { list } = this.props;
    return (
      <div className="shoplist-container">
        <div>
          {
            list.map((item, index) => {
              return (
                <div className="shoplist-container__item" key={index} onClick={() => this.handleTodetail(`shopDetail/${list[index].goodId}`, index)}>
                  <div className="shopList-pic">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="shopList-bottom">
                    <div className="shopList-title">
                      {item.title}
                    </div>
                    <div className="shopList-message">
                      {item.message}
                    </div>
                    <div className="shopList-price">
                      <div>￥{item.price}</div>
                      {
                        item.Coupon.length > 0 && 
                        item.Coupon.map((item, index) => {
                          return (
                            <div className="shopList-Coupon" key={index}>
                              {item}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(ShopList);