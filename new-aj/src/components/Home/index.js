import React, { Component } from 'react';
import MotionMenu from 'react-motion-menu';
import { Button, Modal, Header, Icon, } from 'semantic-ui-react'
import Sound from 'react-sound';

import open from '../../open.mp3';
import juan1 from '../../juan1.PNG';
import juan2 from '../../juan2.PNG';

import './home.css';
import Contact from './Contact';
import About from './About';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      changePict: false
    }
  }

  handleClick = () => {
    this.setState({
      changePict: !this.state.changePict
    })
  }

  render() {
    return (
      <div className="App">
        <Sound
          url={open}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onFinishedPlaying={Sound.status.STOPPED}
        />

        <div className="App-header">
          <div className="motion">
            <MotionMenu
              wing="true"
              openSpeed={100}
              type="circle"
              margin={115}
            >
              <div className="button">
                {
                  this.state.changePict ?
                  <img src={juan1} className="App-logo animated flash" onClick={this.handleClick} alt="logo" />
                  :
                  <img src={juan2} className="App-logo animated flash" onClick={this.handleClick} alt="logo" />
                }
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
