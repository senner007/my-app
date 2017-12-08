import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import NavbarLinks from './components/NavbarLinks';
import Routes from './routing/Routes';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    var text = {
        title: 'This is a title!',
        subtitle : 'This is a subtitle'
    };
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>{this.props.name} - {text.title}</h1>
            <p>This is a simple search app - {text.subtitle}</p>
            <NavbarLinks/>
            <SearchForm/>
          </Grid>
        </Jumbotron>
        <Routes/>
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
