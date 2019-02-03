import React, { Component } from "react";
import "../scss/App.scss";
import { Container, Menu } from "semantic-ui-react";
import "../semantic/dist/semantic.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends Component {

  constructor() {
    super()

    this.state = {
      theme: ''
    }

    this.setTheme = this.setTheme.bind(this);
  }

  setTheme(theme) {
    this.setState({theme: theme});
  }

  render() {
    //todo lift state up for spooky theme
    return (
      <Router>
        <div className={this.state.theme}>
          <div className="bailey-container">
            <Container>
              <Menu compact secondary stackable defaultActiveIndex='home'>
                <Menu.Item
                  name='home'
                >
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item name='about'>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item
                  name='contact'
                >
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Container>
            <div className="ui page grid">
              <Route exact path="/" render={ () => (<Home setTheme={this.setTheme}/>)}/>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
