import React, { Component } from "react";
import { Dialog, DialogTitle, Container, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    formField: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "1rem",
        width: 300,
    }
};

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
                <form className={this.props.classes.container} name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <TextField
                        id="name"
                        name="name"
                        label="Your Name:"
                        className={this.props.classes.formField}
                    />
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Your Email:"
                        className={this.props.classes.formField}
                    />
                    <TextField
                        id="message"
                        name="messate"
                        label="Message:"
                        margin="normal"
                        multiline
                        rows="4"
                        className={this.props.classes.formField}
                    />
                    <Button className={this.props.classes.formField} type="submit">Send</Button>
                </form>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Thanks for the message!</DialogTitle>
                </Dialog>
            </Container>
        );
    }
}

export default withStyles(styles)(Contact);