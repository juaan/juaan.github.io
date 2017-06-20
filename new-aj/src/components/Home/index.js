import React, { Component } from 'react';
import MotionMenu from 'react-motion-menu';
import { Button, Modal, Header, Icon, } from 'semantic-ui-react'
import logo from '../../logo.svg';
import './home.css';
import Contact from './Contact';
import About from './About';

class Home extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <div className="motion">
            <MotionMenu
              wing="true"
              openSpeed={100}
              type="circle"
              margin={115}
            >
              <div className="button">
                <img src={logo} className="App-logo animated flash" alt="logo" />
              </div>
              <div className="button">
                <About />
              </div>
              <div className="button">
                <Contact />
              </div>
            </MotionMenu>
          </div>
        </div>

        <div  className="App-intro">
          <p>
            <b>© 2017 ANTHONY JUAN CHRI$$$TIAN.</b> All rights reserved.
          </p>
        </div>

      </div>
    );
  }
}

export default Home;
