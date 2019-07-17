import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import './searchBox.styl'

class searchBox extends Component {
  state = {
    value: '',
    placeholder: '',
    SearchHistory: []
  }
  componentDidMount() {
    this.props.hideTabbar(false)
    let getItem =  (localStorage.getItem("title") && localStorage.getItem("title").split(',').reverse()) || []
    this.setState({
      placeholder: (this.props.location.query && this.props.location.query.title) || '请输入内容',
      SearchHistory: getItem
    })
  }
  componentWillUnmount(){
    this.props.hideTabbar(true)
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  Cancel = () => {
    this.handleback()
  } 
  onBlur = (value) => {
    console.log('onBlur' ,value)
  }
  onSubmit = (value) => {
    let history = (localStorage.getItem("title") && localStorage.getItem("title").split(',')) || []
    let isExist = history.some((item) => {
      return item === value
    })
    if (!isExist){
      history.push(value)
      localStorage.setItem("title", history)
    }
    let getItem =  (localStorage.getItem("title") && localStorage.getItem("title").split(',').reverse()) || []
    this.setState({
      SearchHistory: getItem,
      value: ''
    })
  }
  handleback = () => {
    window.history.back();
  }
  clearStorage = () => {
    localStorage.clear();
    this.setState({ 
      SearchHistory: []
    });
  }
  render() {
    const { SearchHistory } = this.state;
    return (
      <div className="search-container">
        <div className="search-header">
          <SearchBar
            id="input-search"
            value={this.state.value}
            placeholder={this.state.placeholder}
            onSubmit={value => this.onSubmit(value)}
            onClear={value => this.clear(value)}
            onFocus={() => this.onFocus}
            onBlur={() => this.onBlur}
            onCancel={() => this.Cancel()}
            showCancelButton
            onChange={this.onChange}
          />
        </div>
        <div className="Search-history">
          <p>历史记录</p>
          <img src={[require("../../assets/images/laji.png")]} alt="" className="Search-history__icon"
          onClick={this.clearStorage}/>
          <div className="Search-history__items">
            {
              SearchHistory.map((item, index) => {
                return (
                  <div className="Search-history__item" key={index}>
                    <div>{item}</div>
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

export default searchBox;