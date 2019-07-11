import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
// import Scroll from '../../common/scroll/scroll'
import './home.styl';
import Focus from './focus/Focus';
import City from './city/City';
import Found from './found/Found'

class Home extends Component {
  state = {
    headList: ['关注', '发现', '南昌'],
    currentTab: 1,
  }
  componentDidMount() {
    if (!this.mySwiper) {
      this.mySwiper = new Swiper('.swiper-container', {
        resistanceRatio: 0,
        initialSlide :1
      })
    }
  }
  toSlideItem = (index) => {
    console.log(index)
    this.mySwiper.slideTo(index, 300, false);
    this.setState({
      currentTab: index
    })
  }
  render() {
    const { headList } = this.state
    return (
      <div className="home-container">
        <div className="header">
          <div className="button">
            <img src={[require("../../assets/images/按钮.png")]} alt="" />
          </div>
          <div className="tab-item">
            {
              headList.map((item, index) => {
                return (
                  <div className="nav-link" key={index} 
                  onClick={() => this.toSlideItem(index)} 
                  className={index === this.state.currentTab ? 'bottom' : ''}
                  >
                    <span className={ index ===1 ? 'two' : ''}>{item}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="search-nav">
            <img src={[require("../../assets/images/搜索.png")]} alt="" className="search-icon" />
            <span>大家都在搜"悬疑电影"</span>
          </div>
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* <Focus /> */}
              <img src="http://img0.imgtn.bdimg.com/it/u=3202539744,76575858&fm=26&gp=0.jpg" alt="" />
            </div>
            <div className="swiper-slide">
              <City />
            </div>
            <div className="swiper-slide">
              <Found />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default Home;