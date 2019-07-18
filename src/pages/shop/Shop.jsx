import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBox from '../../containers/searchBox'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.css';
import { fetchGet } from '../../api/axios'
import Loading from '../../common/loading/loading'
import './shop.styl';
import SideBar from '../../common/sidebar/sidebar'

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchTitle: [
        '出游吸睛穿搭'
      ],
      showSidebar: false,
      isScrollTop: false,
      show: true,
      swiper: [],
      header: ['推荐', '家居', '彩妆', '保健', '个护', '护肤'],
      currentTap: 0,
      contentClass: "shop-nav"
    }
    this.current = 0
  }
  componentDidMount() {
    this.windowOnScroll();
    fetchGet('/shop').then((res) => {
      this.setState({
        swiper: res.data.swiper,
        show: false
      }, () => {
        if (!this.mySwiper2) {
          this.mySwiper2 = new Swiper('#swiper2', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              bulletActiveClass: 'my-bullet-active',
            },
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
          })
        }
        if (!this.mySwiper3) {
          this.mySwiper3 = new Swiper('#swiper3', {
            resistanceRatio: 0,
            initialSlide: 0,
            autoHeight: true,
            // effect: 'coverflow',
            on: {
              slideChangeTransitionStart: function () {
                var index = this.activeIndex;
                this.current = index
                // _this.setState({
                //   currentTab: indexaa
                // })
              },
            },
          })
        }
      })
    })
  }
  windowOnScroll() {
    const { isScrollTop } = this.state;
    let _this = this;
    window.onscroll = function () {
      //获取滚动条滚动的距离
      let h = document.documentElement.scrollTop || document.body.scrollTop;
      if (h > 391) {
        if (!isScrollTop) {
          _this.setState({
            contentClass: "shop-nav conditionArea_fixed",
            isScrollTop: true
          })
        }
      } else {
        _this.setState({
          contentClass: "shop-nav",
          isScrollTop: false
        });
      }
    }
  }
  toSlideItem(index) {
    this.mySwiper3.slideTo(index, 300, false);
    this.setState({
      currentTap: index
    })
  }
  showSidebar() {
    this.setState({
      showSidebar: true
    })
  }
  getChildState(show) {
    this.setState({
      showSidebar: show
    })
  }
  navToSearch = (url) => {
    this.props.history.push({
      pathname: url,
      query : { title: this.state.SearchTitle}
    })
  }
  navToSort = () => {
    this.props.history.push({
      pathname: '/shop/sort'
    })
  }
  render() {
    const { swiper, show, header, currentTap } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-container">
        <div className="shop-card__icon">
          <img src={[require("../../assets/images/购物车.png")]} alt="" />
        </div>
        <div className="shop-header">
          <div className="left" onClick={() => this.showSidebar()}>
            <img src={[require("../../assets/images/三根线.png")]} alt="" />
          </div>
          <div className="search" onClick={() => this.navToSearch(`${match.url}/shoptoSearch`)}>
            <img src={[require("../../assets/images/搜索.png")]} alt="" />
            <span>大家都在搜"{this.state.SearchTitle}"</span>
          </div>
          <div className="right" onClick={() => this.navToSort()}>
            <img src={[require("../../assets/images/分类3.png")]} width="18px" height="18px" alt="" />
            <span>分类</span>
          </div>
        </div>
        <div className="shop-bottom">
          {
            show ? <Loading title="正在加载中..." show={this.state.show}></Loading> :
              <div>
                {
                  <div className="swiper-container" id="swiper2">
                    <div className="swiper-wrapper">
                      {
                        swiper.map((item, index) => {
                          return (
                            <div className="swiper-slide" id="swiper-slide" key={index}>
                              <img src={item} alt="" />
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                }
                <div className="shop-bottom__icon1">
                  <img src={[require("../../assets/images/header1.png")]} alt="" />
                </div>
                <div className="shop-bottom__icon2">
                  <img src={[require("../../assets/images/header2.png")]} alt="" />
                </div>
                <div className="shop-goods__list">
                  {
                    <div className={this.state.contentClass}>
                      {
                        header.map((item, index) => {
                          return (
                            <div className={index === currentTap ? 'shop-nav__itemactive' : 'shop-nav__item'} key={index}
                              onClick={() => this.toSlideItem(index)}>
                              {item}
                            </div>
                          )
                        })
                      }
                    </div>
                  }
                  <div className="shop-goods__itemList">
                    <div className="swiper-container" id="swiper3">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide" id="scroll">
                          <img src="https://s11.mogucdn.com/mlcdn/55cf19/190619_381l68gj7k7ag2kacackl64l9i9e6_640x960.jpg_360x480.v1cAC.40.webp" alt="" />
                        </div>
                        <div className="swiper-slide" id="scroll">
                          swiper-slide2
                        </div>
                        <div className="swiper-slide" id="scroll">
                          swiper-slide3
                        </div>
                        <div className="swiper-slide" id="scroll">
                          swiper-slide4
                        </div>
                        <div className="swiper-slide" id="scroll">
                          swiper-slide5
                        </div>
                        <div className="swiper-slide" id="scroll">
                          swiper-slide6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
        <SideBar show={this.state.showSidebar} getState={this.getChildState.bind(this)} />
        <Route path={`${match.url}/shoptoSearch`} component={SearchBox}></Route>
      </div>
    );
  }
}
export default Shop
