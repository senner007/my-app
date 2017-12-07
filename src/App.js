import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import Buttons from './components/Buttons';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    return (
      <div>

        <Jumbotron>
          <Grid>

            <h1>{this.props.name}</h1>
            <p>This is a simple search app</p>
            <SearchForm/>
          </Grid>
        </Jumbotron>
          <Buttons/>
        <Results/>
      </div>
    );
  }
}
  App.propTypes = {
    name: PropTypes.string
  };
  App.defaultProps = {
    name: 'stranger'
  }


export default App;
