import React, { Component } from "react";
import { Grid, Button, Container } from "@material-ui/core";
import Computer from './Computer';

class About extends Component {

    showResume() {
        window.location.href = '/bailey_jones_resume.html';
    }

    render() {
        return (
            <Container className='about main-content'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <img src='/profile.jpg' alt="profile photo of Bailey Jones" />
                    </Grid>
                    <Grid item xs={12} sm={5} className="about-text">
                        <h1>About</h1>
                        <p>I'm currently a senior developer at Fidelity. Before that, I was a front end developer for IBM Hybrid Cloud. 
                            Most of my experience has been with React and Redux. I've also developed in Angular and Vue, and I've written backend apps with node express.</p>
                        <p>Check out <a href="https://css-tricks.com/author/baileyjones/">my author page on css tricks</a> or my <a href="https://github.com/bjones526">github profile</a> 
                            to get a sense of topics I'm interested in!</p>
                        <p>I graduated from UNC's master's in Information Science program in 2016.
                            My master's paper focused on thumbnails for archival collections online, which I presented at the 2017 Joint Conference for Digital Libraries in Toronto.
                You can find the <a href='https://ieeexplore.ieee.org/document/7991599'> publication</a> in the JCDL conference proceedings on IEEE Xplore. </p>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Button onClick={this.showResume}>r&eacute;sum&eacute;</Button>
                            <Computer />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}
export default About;