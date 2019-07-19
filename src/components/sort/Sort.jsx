import React, { Component } from 'react';
import './sort.styl'

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTap: 0,
      data: {
        tab: ['护肤','彩妆','个人护理','保健品','母婴','包包', '配饰','服装','内衣家居服', '鞋靴', '家具','家电数码','美食','运动','宠物']
      }
    }
  }
  componentDidMount() {
    this.props.hideTabbar(false)
  }
  handleback = () => {
    window.history.back();
  }
  componentWillUnmount(){
    this.props.hideTabbar(true)
  }
  handleTab(index){
    console.log(index)
    this.setState({
      currentTap: index
    })
  }
  render() {
    const { data } = this.state;
    return (
      <div className="sort-container">
        <div className="sort-header">
          <img src={[require('../../assets/images/arrow.png')]} alt=""
            onClick={this.handleback} />
          <div>分类</div>
        </div>
          <div className="sort-sidebar">
            {
              data.tab.map((item, index) => {
                return (
                  <div key={index}
                  className={index === this.state.currentTap ? 'sort-sidebar__item Active' : 'sort-sidebar__item'}
                  onClick={() => this.handleTab(index)}>
                    {item}
                  </div>
                )
              })
            }
          </div>
        <div className="sort-content">
          nba2
        </div>
      </div>
    );
  }
}

export default Sort;