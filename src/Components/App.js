import React, { Component } from "react";
import "../scss/App.scss";
import { Container, Link } from "@mui/material";
import { Routes, Route, Link as RouterLink, Outlet } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
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

function Layout() {
  return (
    <div className="bailey-container">
      <Container className="navigation">
        <Link component={RouterLink} to="/">Home</Link>
        <Link component={RouterLink} to="about">About</Link>
        <Link component={RouterLink} to="contact">Contact</Link>
      </Container>
      <Outlet />
  </div>
  );
}

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
  //TODO need to handle contact submission
  //TODO route to resume.

  render() {
    return (
      <ThemeProvider theme={theme}>
          <div>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home setTheme={this.setTheme} setLights={this.setLights} light1={this.state.light1} light2={this.state.light2}/>} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact open={false} />} />
                <Route path="contact/submission" element={<Contact open={true} />} />
              </Route>
            </Routes>
          </div>
      </ThemeProvider>
    );
  }
}

export default App;
