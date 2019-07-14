import React, { Component } from 'react';
import loadingImg from './loading.gif';
import './loading.styl';

class Loading extends Component {
  state = {  }
  render() { 
    const { show, title } = this.props
    return ( 
      <div className="loading-container" style={{display: show ? '' : 'none'}}>
        <div className="loading-wrapper">
          <div className="loading-wrapper-img">
            <img src={loadingImg} width="100%" height="100%" alt=""/>
          </div>
          <div className="loading-title">
            { title }
          </div>
        </div>
      </div>
    );
  }
}
 
export default Loading;