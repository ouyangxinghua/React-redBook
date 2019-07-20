import React, { Component } from 'react';
import './shoplist.styl'
import ShopDetail from '../../components/shopDetail/shopDetail'
import { withRouter, Route } from 'react-router-dom'

class ShopList extends Component {
  state = {}
  handleTodetail = (url) => {
    console.log(url)
    this.props.history.push({
      pathname: url
    })
  }
  render() {
    const { list, match } = this.props;
    return (
      <div className="shoplist-container">
        <div>
          {
            list.map((item, index) => {
              return (
                <div className="shoplist-container__item" key={index} onClick={() => this.handleTodetail(`${match.url}/shopDetail`)}>
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
        <Route path={`${match.url}/shopDetail`} component={ShopDetail}></Route>
      </div>
    );
  }
}

export default withRouter(ShopList);