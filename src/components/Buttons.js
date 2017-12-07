import React from 'react';
import {
  Grid,
  Button,
  ButtonToolbar
} from 'react-bootstrap';

const Buttons = () => (
  <Grid>
    <ButtonToolbar>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Button bsSize="large">Large button</Button>
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

export default Buttons;
