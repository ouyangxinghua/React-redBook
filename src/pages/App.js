import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';
import Message from './message/Message';
import Mine from './mine/Mine';
import Sort from '../containers/Sort';
import peopleDetail from '../containers/peopleDetail'
import ShopDetail from '../containers/shopDetail'
import ShopCart from '../containers/ShopCart'
import './App.styl';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {
            !this.props.showTarbar ? <div></div> :
              <div className="tabbar">
                <div className="nav-link">
                  <NavLink to="/home" activeClassName="selected">首页</NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to="/shop" activeClassName="selected">商城</NavLink>
                </div>
                <button className="open-file">
                  <img src={[require("../assets/images/aaa.png")]} alt="" />
                </button>
                <div className="nav-link">
                  <NavLink to="/message" activeClassName="selected">消息</NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to="/mine" activeClassName="selected">我</NavLink>
                </div>
              </div>
          }
          <div className="redBook-main">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/message" component={Message} />
              <Route path="/mine" component={Mine} />
              <Route path="/sort" component={Sort} />
              <Route path="/peopleDetail/:id" component={peopleDetail} />
              <Route path="/shopDetail/:id" component={ShopDetail}/>
              <Route path="/shopcart" component={ShopCart} />
              <Route path="/" render={() => {
                return false ?
                  <div>home</div> : <Redirect to={{
                    pathname: '/home',
                  }} />
              }}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showTarbar: state.showTarbar
  }
}

export default connect(mapStateToProps)(App);
