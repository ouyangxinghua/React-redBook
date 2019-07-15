import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
// import Scroll from '../../common/scroll/scroll'
import City from '../../components/city/City'
import Found from '../../components/found/Found'
import Focus from '../../components/focus/Focus'
import './home.styl';
import { forceCheck } from 'react-lazyload';
import SearchBox from '../../common/searchBox/searchBox'

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
    if (!this.mySwiper1) {
      this.mySwiper1 = new Swiper('#swiper1', {
        resistanceRatio: 0,
        initialSlide: 1,
        autoHeight: true,
        effect: 'coverflow',
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
    this.mySwiper1.slideTo(index, 300, false);
    this.setState({
      currentTab: index
    })
  }
  navToSearch = (url) => {
    this.props.history.push({
      pathname: url
    })
  }
  render() {
    const { headList } = this.state
    const { match } = this.props;
    // console.log(match);
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
            <div className="search-nav" onClick={() => this.navToSearch(`${match.url}/hometoSearch`)}>
              <img src={[require("../../assets/images/搜索.png")]} alt="" className="search-icon" />
              <span>大家都在搜"悬疑电影"</span>
            </div>
          </div>
          <div className="swiper-container" id="swiper1">
            <div className="swiper-wrapper">
              <div className="swiper-slide" onScroll={forceCheck}>
                <Focus />
              </div>
              <div className="swiper-slide" onScroll={forceCheck}>
                <Found />
              </div>
              <div className="swiper-slide" onScroll={forceCheck}>
                <City />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <Route path={`${match.url}/:id`} component={SearchBox} />
        </div>
    );
  }
}

export default Home;