import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './home.styl';
import Focus from './focus/Focus';
import City from './city/City';
import Found from './found/Found'

class Home extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div class="home-container">
          <div className="header">
            <div className="button">
              <img src={[require("../../assets/images/按钮.png")]} alt="" />
            </div>
            <div className="tab-item">
              <div className="nav-link">
                <NavLink to="/home/focus" activeClassName="selected">关注</NavLink>
              </div>
              <div className="nav-link two">
                <NavLink to="/home/found" activeClassName="selected">发现</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/home/city" activeClassName="selected">南昌</NavLink>
              </div>
            </div>
            <div className="search-nav">
              <img src={[require("../../assets/images/搜索.png")]} alt="" className="search-icon"/>
              <span>大家都在搜"悬疑电影"</span>
            </div>
          </div>
          <Switch>
            <Route path="/home/focus" component={Focus} />
            <Route path="/home/found" component={Found} />
            <Route path="/home/city" component={City} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;