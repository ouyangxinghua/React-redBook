import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import './searchBox.styl'

class searchBox extends Component {
  state = {
    value: '',
    placeholder: '',
    SearchHistory: ['sdk','sdjfgdfg', 'dsfssfdsfds', 'dsfdsfdsfds', 'fdsfdsfsd']
  }
  componentDidMount() {
    this.setState({
      placeholder: this.props.location.query.title
    })
  }
  onChange= (value) => {
    this.setState({ value });
    console.log('djkfsldj')
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
    console.log('onSubmit' ,value)
  }
  handleback = () => {
    window.history.back();
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
            onClear={value => this.onClear(value)}
            onFocus={() => this.onFocus}
            onBlur={() => this.onBlur}
            onCancel={() => this.Cancel()}
            showCancelButton
            onChange={this.onChange}
          />
        </div>
        <div className="Search-history">
          <p>历史记录</p>
          <img src={[require("../../assets/images/laji.png")]} alt="" className="Search-history__icon"/>
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
export default searchBox