/*global Shine*/
/*global shinejs*/
import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import LightBulb from "./LightBulb";

class Home extends Component {

    constructor(props) {
        super(props);

        this.shineLetters = [];
        this.config = new shinejs.Config({
            numSteps: 12,
            opacity: 0.2,
            shadowRGB: new shinejs.Color(0, 0, 0)
        });

        this.handleLightClick = this.handleLightClick.bind(this);
    }

    componentDidMount() {
        let letters = document.getElementsByClassName("shine-object");
        for (let i = 0; i < letters.length; i++) {
            let shine = new Shine(letters[i], this.config);
            shine.light.position.x = document.documentElement.clientWidth / 2;
            shine.light.position.y = 0;
            shine.draw();
            this.shineLetters.push(shine);
        }
    }

    handleLightClick(event, id) {

        let oppositeId = id === 'light1' ? 'light2' : 'light1';
        let oppositeLight = this.props[oppositeId];
        let oppositeLightCoords = document.getElementById(oppositeId).getBoundingClientRect();
        let selectedLight = !this.props[id];
        let selectedLightCoords = document.getElementById(id).getBoundingClientRect();

        if (!selectedLight && oppositeLight) {
            //selected light is off and opposite light is on, draw shadows for opposite light.
            this.shineLetters.forEach(function (shine) {
                shine.light.position.x = oppositeLightCoords.left;
                shine.light.position.y = oppositeLightCoords.top;
                shine.draw();
            })
            this.props.setTheme('');
        } else if (selectedLight && oppositeLight) {
            //selected light is on and opposite light on, draw diffuse shadows.
            this.shineLetters.forEach(function (shine) {
                shine.light.position.x = document.documentElement.clientWidth / 2;
                shine.light.position.y = selectedLightCoords.top;
                shine.draw();
            })
            this.props.setTheme('');

        } else if (selectedLight && !oppositeLight) {
            //seleted light is on and opposite light is off, draw shadows for selected light.
            this.shineLetters.forEach(function (shine) {
                shine.light.position.x = selectedLightCoords.left;
                shine.light.position.y = selectedLightCoords.top;
                shine.draw();
            })
            this.props.setTheme('');
        } else if (!selectedLight && !oppositeLight) {
            this.props.setTheme('spooky');
        }
        this.props.setLights(id);
    }

    render() {
        let { light1, light2 } = this.props;
        return (
            <Fragment>
                <Container className="lights">
                    <LightBulb id='light1'
                        className={light1 ? "" : "off"}
                        rotation="135"
                        onClick={(event) => this.handleLightClick(event, "light1")} />
                    <p>Click the lights to interact.</p>
                    <LightBulb id='light2'
                        className={light2 ? "" : "off"}
                        rotation="-135"
                        onClick={(event) => this.handleLightClick(event, "light2")} />
                </Container>
                <Container className='site-name'>
                    <div id="my-shine-object">
                        <h1>
                            <span className ="name-container first-name-container">
                            <span className="shine-object">B</span>
                            <span className="shine-object">a</span>
                            <span className="shine-object">i</span>
                            <span className="shine-object">l</span>
                            <span className="shine-object">e</span>
                            <span className="shine-object">y</span>
                            </span>
                            <span className ="name-container">
                            <span className="shine-object">J</span>
                            <span className="shine-object">o</span>
                            <span className="shine-object">n</span>
                            <span className="shine-object">e</span>
                            <span className="shine-object">s</span>
                            </span>
                        </h1>
                    </div>
                    <p>Hi there! I'm a software engineer with strong expertise in front-end development.</p>
                </Container>
                <Container className='credits'>
                    <p>Developed with <a href="https://reactjs.org/">react.js,</a> <a href="https://semantic-ui.com/">semantic-ui,</a> and <a href="http://bigspaceship.github.io/shine.js/">shine.js.</a></p>
                    <br/>
                    <p>Images:</p>
                    <p>© videoplasty.com / <a href="https://commons.wikimedia.org/wiki/File:Light_Bulb_or_Idea_Flat_Icon_Vector.svg">Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC-BY-SA-4.0</a></p>
                    <p><a href="https://commons.wikimedia.org/wiki/File:Blue_computer_icon.svg">Wikimedia Commons</a> / <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC-BY-SA-3.0</a></p>
                </Container>
            </Fragment>
        );
    }
}

export default Home;
