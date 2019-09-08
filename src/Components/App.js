import React, { Component } from "react";
import "../scss/App.scss";
import { Container, Link } from "@material-ui/core";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        backgroundColor: '#e0e1e2',
        borderRadius: 3,
        border: 0,
        color: 'rgba(0, 0, 0, .6)',
        height: '2rem',
        padding: '0 1rem',
        boxShadow: '0 3px 5px 2px (0, 0, 0, .6)',
      },
    },
  },
});

class App extends Component {

  constructor() {
    super()

    this.state = {
      light1: true,
      light2: true,
    }

    this.setLights = this.setLights.bind(this);
  }

  setTheme(theme) {
    if (theme === 'spooky') {
      document.body.classList.add(theme);
    } else {
      document.body.classList.remove('spooky');
    }
  }

  setLights(id) {
    this.setState({ [id]: !this.state[id] });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <div className="bailey-container">
              <Container className="navigation">
                <Link component={RouterLink} to="/">Home</Link>
                <Link component={RouterLink} to="/about">About</Link>
                <Link component={RouterLink} to="/contact">Contact</Link>
              </Container>
              <div>
                <Route exact path="/" render={() => (<Home setTheme={this.setTheme} setLights={this.setLights} light1={this.state.light1} light2={this.state.light2} />)} />
                <Route path="/about" render={() => (<About />)} />
                <Route path="/contact" render={() => (<Contact open={false} />)} />
                <Route path="/contact/submission" render={() => (<Contact open={true} />)} />
              </div>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
