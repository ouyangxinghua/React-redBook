import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Shop from './shop/Shop';
import Message from './message/Message';
import Mine from './mine/Mine';

import './App.styl';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="tabbar">
          <div className="nav-link">
            <NavLink to="/home" activeClassName="selected">首页</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/shop" activeClassName="selected">商城</NavLink>
          </div>
          <button className="open-file">
            <img src={[require("../assets/images/添加.png")]} alt="" />
          </button>
          <div className="nav-link">
            <NavLink to="/message" activeClassName="selected">消息</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/mine" activeClassName="selected">我</NavLink>
          </div>
        </div>
        <div className="redBook-main">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/message" component={Message} />
            <Route path="/mine" component={Mine} />
            <Route path="/" render={() => {
              return true ?
                <div>home</div> : <Redirect to={{
                  pathname: '/shop',
                }} />
            }}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
