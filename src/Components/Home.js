/*global Shine*/
/*global shinejs*/
import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import LightBulb from "./LightBulb";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            light1: true,
            light2: true,
        }

        this.shineLetters = [];
        this.config = new shinejs.Config({
            numSteps: 12,
            opacity: 0.2,
            shadowRGB: new shinejs.Color(0, 0, 0)
        });

        this.handleLightClick = this.handleLightClick.bind(this);
    }

    componentDidMount() {
        //todo draw diffuse shadows for when both lights are on (instead of from top left corner)
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
        let oppositeLight = this.state[oppositeId];
        let oppositeLightCoords = document.getElementById(oppositeId).getBoundingClientRect();
        let selectedLight = !this.state[id];
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
            //both lights are being turned off
            this.props.setTheme('spooky');

        }

        this.setState({ [id]: !this.state[id] })
    }

    render() {
        let { light1, light2 } = this.state;
        return (
            <Fragment>
                <Container className="lights">
                    <LightBulb id='light1'
                        className={light1 ? "" : "off"}
                        rotation="135"
                        onClick={(event) => this.handleLightClick(event, "light1")} />
                    <LightBulb id='light2'
                        className={light2 ? "" : "off"}
                        rotation="-135"
                        onClick={(event) => this.handleLightClick(event, "light2")} />
                </Container>
                <Container>
                    <div id="my-shine-object">
                        <h1>
                            <span className="shine-object">B</span>
                            <span className="shine-object">a</span>
                            <span className="shine-object">i</span>
                            <span className="shine-object">l</span>
                            <span className="shine-object">e</span>
                            <span className="shine-object">y</span>
                            <span>&nbsp;</span>
                            <span className="shine-object">J</span>
                            <span className="shine-object">o</span>
                            <span className="shine-object">n</span>
                            <span className="shine-object">e</span>
                            <span className="shine-object">s</span>
                        </h1>
                    </div>
                    <p>Hi there! I'm a software engineer with strong expertise in front-end development.</p>
                    <p>Click the lights to interact.</p>
                </Container>
                <Container>
                    <p>Designed and implemented by Bailey Jones, 2019.</p>
                    <p>Developed with react.js, semantic-ui, and <a href="http://bigspaceship.github.io/shine.js/">shine.js.</a> Ligtbulb svg originally by <a href="videoplasty.com">videoplasty.com</a> and used under creative commons license </p>
                </Container>
            </Fragment>
        );
    }
}

export default Home;
