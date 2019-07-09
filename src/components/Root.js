import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/store';

class Root extends Component {
  state = {  }
  render() { 
    return ( 
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
 
export default Root;