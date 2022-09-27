import React, { Component } from "react";
import { Grid, Button, Container } from "@mui/material";
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
                        <img src='/profile.jpg' alt="head shot of Bailey Jones" />
                    </Grid>
                    <Grid item xs={12} sm={5} className="about-text">
                        <h1>About</h1>
                        <p>I'm currently a senior software engineer at Salesforce, where I develop with Javascript and Node. Before that, I was a front end developer at Fidelity and IBM Hybrid Cloud.</p>
                        <p>Check out <a href="https://css-tricks.com/author/baileyjones/">my author page on css tricks</a> or my <a href="https://github.com/bjones526"> github profile</a> 
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