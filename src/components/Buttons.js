import React from 'react';
import {
  Grid,
  Button,
  ButtonToolbar
} from 'react-bootstrap';


function Buttons () {
  var text = {
    large: 'Hello Large Button',
    size: 'large'

  }

  return (
  <Grid>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize={text.size}>{text.large}</Button>
      <Button bsSize="large">{text.large}</Button>
      <Button bsSize="large">{text.large}</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary">Default button</Button>
      <Button>Default button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="small">Small button</Button>
      <Button bsSize="small">Small button</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
      <Button bsSize="xsmall">Extra small button</Button>
    </ButtonToolbar>
  </Grid>
);
}

export default Buttons;
