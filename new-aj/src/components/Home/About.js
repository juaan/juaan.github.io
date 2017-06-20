import React from 'react';
import { Button, Modal, Header, Icon, } from 'semantic-ui-react'


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })


  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return(
      <Modal
        trigger={<Button onClick={this.handleOpen} inverted color='olive'>About</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='info' content='About Me' />
        <Modal.Content>
          <h3>My name is Anthony Juan Christian (21). I love photography , design, or anything that come from creative field. I live in Bekas*i. I enjoyed doing Programming, and doing any thing that has correlations with creativity. I spend most of my free time to be excel on these domains.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Yep, Thats me
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default About;
