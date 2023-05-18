import React, { Component } from "react";
import { Dialog, DialogTitle, Container, TextField, Button } from '@mui/material';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: props.open
        }

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <Container className="main-content contact">
                <h1>Contact</h1>
                <p>Let's get in touch! You can leave a note here or find me on <a href="https://www.linkedin.com/in/bailey-jones-06216877/">LinkedIn.</a></p>
                <form name="contact" method="post" className="form-container">
                    <input type="hidden" name="form-name" value="contact" />
                    <TextField className="formField"
                        id="name"
                        name="name"
                        label="Your Name:"
                    />
                    <TextField className="form-field"
                        id="email"
                        name="email"
                        type="email"
                        label="Your Email:"
                    />
                    <TextField className="form-field"
                        id="message"
                        name="messate"
                        label="Message:"
                        margin="normal"
                        multiline
                        rows="4"
                    />
                    <Button type="submit">Send</Button>
                </form>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Thanks for the message!</DialogTitle>
                </Dialog>
            </Container>
        );
    }
}

export default Contact;