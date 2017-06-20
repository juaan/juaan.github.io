import React from 'react';
import { Button, Modal, Header, Icon, } from 'semantic-ui-react'


class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal
        trigger={<Button inverted color='olive'>Contact</Button>}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Okay, Dude
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default Contact;
