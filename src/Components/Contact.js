import React, { Component } from "react";
import { Grid, Container, Icon } from "semantic-ui-react";

class Contact extends Component {

    onIconClick(link) {
        window.location.href = link
    }

    render() {
        return (
            <Container className="main-content">
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign="center" verticalAlign="middle" width={8}>
                            <Icon aria-label="mail" name="mail" size="huge" link onClick={() => {this.onIconClick("mailto:bjones526@gmail.com")}}></Icon>
                            <Icon aria-label="linkedIn" name="linkedin" link size="huge" onClick={() => {this.onIconClick("https://www.linkedin.com/in/bailey-jones-06216877/")}}></Icon>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={8}>
                            <h1>Contact</h1>
                            <p>Let's get in touch! You can <a href="mailto:bjones526@gmail.com">email</a> or find me on <a href="https://www.linkedin.com/in/bailey-jones-06216877/">LinkedIn.</a></p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Contact;