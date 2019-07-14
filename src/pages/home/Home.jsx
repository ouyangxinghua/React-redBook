import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
// import Scroll from '../../common/scroll/scroll'
import City from '../../components/city/City'
import Found from '../../components/found/Found'
import Focus from '../../components/focus/Focus'
import './home.styl';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headList: ['关注', '发现', '南昌'],
      currentTab: 1,
    }
  }
  componentDidMount() {
    var _this = this;
    if (!this.mySwiper) {
      this.mySwiper = new Swiper('#swiper1', {
        resistanceRatio: 0,
        initialSlide: 1,
        autoHeight: true,
        effect : 'coverflow',
        on: {
          slideChangeTransitionStart: function () {
            let index = this.activeIndex;
            _this.setState({
              currentTab: index
            })
          },
        },
      })
    }
  }
  toSlideItem = (index) => {
    // console.log(index)
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
            <img src={[require("../../assets/city/top.png")]} alt="" />
          </div>
          <div className="tab-item">
            {
              headList.map((item, index) => {
                return (
                  <div key={index}
                    onClick={() => this.toSlideItem(index)}
                    className={index === this.state.currentTab ? 'bottom' : 'nav-link'}
                  >
                    <span className={index === 1 ? 'two' : ''}>{item}</span>
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
        <div className="swiper-container" id="swiper1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Focus />
            </div>
            <div className="swiper-slide">
              <Found />
            </div>
            <div className="swiper-slide">
              <City />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default Home;