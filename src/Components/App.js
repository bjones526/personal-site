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
      light1: true,
      light2: true,
  }

    this.setLights = this.setLights.bind(this);
  }

  setTheme(theme) {
    if(theme === 'spooky'){
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
      <Router>
        <div>
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
              <Route exact path="/" render={ () => (<Home setTheme={this.setTheme} setLights={this.setLights} light1={this.state.light1} light2={this.state.light2}/>)}/>
              <Route path="/about" component={About} />
              <Route path="/contact" component={() => (<Contact open={false}/>)}  />
              <Route path="/contact/submission" component={() => (<Contact open={true}/>)} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
