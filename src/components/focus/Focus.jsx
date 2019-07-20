import React, { Component } from 'react';
import CartList from '../cardList/cardList'
import Scroll from '../../common/scroll/scroll'
import { API } from '../../api/axios'
import Loading from '../../common/loading/loading'
import './focus.styl';

class Focus extends Component {
  state = {
    listData: {},
    header: [],
    show: true
  }
  componentDidMount() {
    API.getFocus().then(res => {
      this.setState({
        listData: res.data.listData,
        header: res.data.header,
        show: false
      })
    })
  }
  // onTouchStart(e){
  //   console.log('nba')
  //   // e.preventDefault()
  //   e.stopPropagation();
  //   // e.stopImmediatePropagation();
  // }
  // onTouchMove(e) {
  //   console.log('nba2')
  //   e.stopPropagation();
  // }
  // onDrag(e){
  //   console.log('nba3')
  //   e.stopPropagation();
  // }
  render() {
    const { listData, header, show } = this.state;
    return (
      show ? <Loading title="正在加载中..." show={this.state.show}></Loading> :
        <Scroll>
          <div className="focus-container">
            <div className="focus-items"
            // onTouchStart={(e) => this.onTouchStart(e)}
            // onTouchMove={(e) => this.onTouchMove(e)}
            // onTouchEnd={(e) => this.onDrag(e)}
            >
              {
                header.map((item, index) => {
                  return (
                    <div className="focus-item" key={index}
                      style={index === 0 ? { marginRight: '15px' } : { border: '2px solid yellow' }}>
                      <div className="focus-item__flex">
                        <img src={[require(`../../assets/focus/${item.url}.jpg`)]} className="focus-bgc" alt="" />
                        <img src={[require(`../../assets/focus/${item.avatar}.jpg`)]} alt="" className="focus-avatar" />
                        <span>{item.title}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="focus-cart">
              <CartList list={listData} />
            </div>
          </div>
        </Scroll>
    );
  }
}

export default Focus