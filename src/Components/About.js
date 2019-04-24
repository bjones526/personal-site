import React, { Component } from "react";
import { Grid, Image, Button, Container} from 'semantic-ui-react';
import Computer from './Computer';

class About extends Component {

    showResume() {
        window.location.href = '/bailey_jones_resume.html';
    }

    render() {
        return (
            <Container className='about main-content'>
                <Grid stackable>
                    <Grid.Row columns={2} >
                        <Grid.Column textAlign='center' verticalAlign='middle' width={8}>
                            <Image src='/profile.jpg' circular size="medium" />
                        </Grid.Column>
                        <Grid.Column textAlign='left' width={8}>
                            <h1>About</h1>
                            <p>I'm currently senior developer at Fidelity Labs. Before that, I was a front end developer for IBM Hybrid Cloud. Most of my experience has been with React and Redux, but I've also developed in Angular and written backend apps with node express.</p>
                            <p>I graduated from UNC's master's in Information Science program in 2016.
                                My master's paper focused on thumbnails for archival collections online, which I presented at the 2017 Joint Conference for Digital Libraries in Toronto.
                You can find the <a href='https://ieeexplore.ieee.org/document/7991599'> publication</a> in the JCDL conference proceedings on IEEE Xplore. </p>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Button onClick={this.showResume}>r&eacute;sum&eacute;</Button>
                                </Grid.Column>
                                <Grid.Column width={8} textAlign='right'>
                                    <Computer/>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default About;