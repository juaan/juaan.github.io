import React from 'react';
import { Button,Grid, Popup,Icon  } from 'semantic-ui-react'


class Contact extends React.Component {

  render() {
    return(
      <Popup wide trigger={<Button inverted color='olive'>More !</Button>} on='click'>
        <Grid divided columns='equal'>
          <Grid.Column>
            <Popup
              trigger={<a href="https://twitter.com/anthonyjuan_"><Icon name='twitter' size='large' color="green"/></a>}
              content='If you wanna see me swearing a lot.'
              position='top center'
              size='tiny'
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<a href="https://instagram.com/anthonyjuan_"><Icon name='instagram' size='large' color="green" /></a>}
              content='If you wanna see some-artsy-shit feeds.'
              position='top center'
              size='tiny'
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<a href="https://github.com/anthonyjuan"><Icon name='github alternate' size='large' color="green" /></a>}
              content='If you wanna see ma world.'
              position='top center'
              size='tiny'
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<a href="https://github.com/anthonyjuan"><Icon name='mail outline' size='large' color="green" /></a>}
              content='Do not hesitate dude : anthonyjuan@outlook.com'
              position='top center'
              size='tiny'
              inverted
            />
          </Grid.Column>
          <Grid.Column>
            <Popup
              trigger={<Icon name='soundcloud' size='large' color="green" />}
              content='SOON !'
              position='top center'
              size='tiny'
              inverted
            />
          </Grid.Column>
        </Grid>
      </Popup>
    )
  }

}

export default Contact;
