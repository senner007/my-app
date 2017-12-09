import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import NavbarLinks from './components/NavbarLinks';
import Routes from './routing/Routes';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    var text = {
        title: 'with Routing and Bootstrap',
        subtitle : 'Additional modules used: React-bootstrap, react-router-bootstrap, react-router-dom'
    };
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>{this.props.name}</h1>
            <p>- {text.title}</p>
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
  name: 'Basic React App'
}

export default App;
