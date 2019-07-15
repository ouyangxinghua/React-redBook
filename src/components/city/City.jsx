import React, { Component } from 'react';
import { fetchGet } from '../../api/axios'
import CartList from '../cardList/cardList';
import Loading from '../../common/loading/loading'
import './city.styl';

class City extends Component {
  state = {
    type: 'map',
    listData: {},
    header: [],
    show: true
  }
  componentDidMount() {
    fetchGet('/city').then((res) => {
      console.log(res.data.listData)
      this.setState({
        listData: res.data.listData,
        header: res.data.header,
        show: false
      })
    })
  }
  render() {
    const { listData, type, header, show } = this.state
    return (
      show ? <Loading title="正在加载中..." show={this.state.show}></Loading> :
      <div className="city">
        <div className="header-items">
          {
            header.map((item, index) => {
              return (
                <div className="header-item" key={index}>
                  <div className="header-item__flex">
                    <img src={[require(`../../assets/city/${item.url}.png`)]} alt="" />
                    <span>{item.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="city-cartlist">
          <CartList list={listData} type={type} />
        </div>
      </div>
    );
  }
}

export default City