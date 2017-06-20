import React, { Component } from 'react';
import MotionMenu from 'react-motion-menu';
import logo from '../../logo.svg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <MotionMenu
            type="circle"
            margin={150}
          >
            <div className="button">
              <img src={logo} className="animated rubberBand App-logo" alt="logo" />
            </div>
            <div className="button">
              <p>Name</p>
            </div>
            <div className="button">
              <p>About Me</p>
            </div>
            <div className="button">
              <p>Contact</p>
            </div>
          </MotionMenu>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
