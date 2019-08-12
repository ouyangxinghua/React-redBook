import React, { Component } from 'react';
import './sort.styl';
import Loading from '../../common/loading/loading';
import Scroll from '../../common/scroll/scroll'
import { API } from '../../api/axios'
import { forceCheck } from 'react-lazyload';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshScroll: false,
      show: true,
      currentTap: 0,
      cateList: []
    }
  }
  componentDidMount() {
    API.getSort().then(res => {
      this.setState({
        cateList: res.data.cateList,
        refreshScroll: true,
        show: false
      })
    })
    this.props.hideTabbar(false)
  }
  handleback = () => {
    window.history.back();
  }
  componentWillUnmount() {
    this.props.hideTabbar(true)
  }
  handleTab(index) {
    this.setState({
      currentTap: index
    })
  }
  renderSidebar() {
    const { cateList, show } = this.state;
    return (
      show ? <div></div> :
        cateList.map((item, index) => {
          return (
            <div key={index}
              className={index === this.state.currentTap ? 'sort-sidebar__item Active' : 'sort-sidebar__item'}
              onClick={() => this.handleTab(index)}>
              {item.name}
            </div>
          )
        })
    )
  }
  renderLeft() {
    const { cateList, show, currentTap } = this.state;
    return (
      show ? <Loading title="正在加载中..." show={this.state.show}></Loading> :
        cateList[currentTap].leftCateList.map((item, index) => {
          return (
            <div className="sort-content__item" key={index}>
              <p className="sort-content__text">{item.sort}</p>
              {
                item.list.map((item, index) => {
                  return (
                    <div className="flex-box" key={index}>
                      <div className="sort-content__it" key={index}>
                        <div className="sort-item__pic">
                          <img src={item.pic} alt="" />
                        </div>
                        <div className="sort-item__name">{item.name}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
    )
  }
  render() {
    const { refreshScroll } = this.state;
    return (
      <div className="sort-container">
        <div className="sort-header">
          <img src={[require('../../assets/images/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div>分类</div>
        </div>
        <div className="sort-sidebar">
          {this.renderSidebar()}
        </div>
        <div className="sort-content">
          <Scroll refresh={refreshScroll} onScroll={forceCheck}>
            <div className="sort-content__items">
              {this.renderLeft()}
            </div>
          </Scroll>
        </div>
      </div>
    );
  }
}

export default Sort;