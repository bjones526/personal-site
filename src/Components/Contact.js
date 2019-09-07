import React, { Component } from "react";
import { Grid, Container, Icon } from "semantic-ui-react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: props.open
        }

        this.handleClose = this.handleClose.bind(this);
    }

    onIconClick(link) {
        window.location.href = link
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <Container className="main-content contact">
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign="center" verticalAlign="middle" width={8}>
                            <Icon aria-label="linkedIn" name="linkedin" link size="huge" onClick={() => { this.onIconClick("https://www.linkedin.com/in/bailey-jones-06216877/") }}></Icon>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={8}>
                            <h1>Contact</h1>
                            <p>Let's get in touch! You can leave a note here or find me on <a href="https://www.linkedin.com/in/bailey-jones-06216877/">LinkedIn.</a></p>
                            <form name="contact" method="post" action="/contact/submission">
                                <input type="hidden" name="form-name" value="contact" />
                                <p>
                                    <label>Your Name: <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Your Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Thanks for the message!</DialogTitle>
                </Dialog>
            </Container>
        );
    }
}

export default Contact;