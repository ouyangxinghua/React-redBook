import React, { Component } from 'react';
import './sidebar.styl'

class SideBar extends Component {
  state = {
    showsidebar: false,
    itemList: [
      {
        url: '1',
        title: '发现好友'
      },
      {
        url: '2',
        title: '我的草稿'
      },
      {
        url: '3',
        title: '购物车'
      }, {
        url: '4',
        title: '订单'
      }, {
        url: '5',
        title: '卡券'
      }, {
        url: '6',
        title: '心愿单'
      }, {
        url: '7',
        title: '小红卡会员'
      }, {
        url: '8',
        title: '免流量'
      }, {
        url: '9',
        title: '钱包'
      }, {
        url: '10',
        title: '帮助与客服'
      }, {
        url: '11',
        title: '扫一扫'
      }, {
        url: '12',
        title: '设置'
      }
    ]
  }
  render() {
    const { show } = this.props;
    const { showsidebar, itemList } = this.state;
    return (
      <div className="sidebar-container"
      >
        <div className={`shop-bgc ${show ? 'shop-bgc__enter' : 'shop-bgc__active'}`}
          onClick={() => {
            this.props.getState(showsidebar)
          }}></div>
        <div className={`side-container ${show ? 'enter' : 'active'}`}>
          <div className="side-container__title">
            更多
          </div>
          <div className="side-container__list">
            {
              itemList.map((item, index) => {
                return (
                  <div className="side-listItem" key={index}>
                    <img src={[require(`../../assets/sidebar/${item.url}.png`)]} alt="" />
                    <span>{item.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;