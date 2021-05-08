import React from "react";
import { connect } from "react-redux";
import { Grid, Container, Divider, Header, Message } from "semantic-ui-react";

import ProfileForm from "./components/contactform";
const fetch = require("node-fetch");

const App = (props) => (
    <Container>
        <Divider hidden />

        <Grid columns="equal">
            <Grid.Column only="computer"></Grid.Column>

            <Grid.Column computer={10} mobile={16} tablet={16}>
                <Header as="h1" dividing>
                    Register for Covid Appointment
                </Header>

                <Message>
                    <Message.Header>Changes in Service</Message.Header>
                    <p>
                        We updated our privacy policy here to better service our
                        customers. We recommend reviewing the changes.
                    </p>
                </Message>

                <ProfileForm
                    onSubmit={() => {
                        console.log(props.values.firstName);
                        console.log(props.values);

                        let body = {
                            firstName: props.values.firstName.toLowerCase(),
                            lastName: props.values.lastName.toLowerCase(),
                            email: props.values.email.toLowerCase(),
                            phone: props.values.phone.toLowerCase(),
                            ageGroup: props.values.ageGroup.toLowerCase(),
                            vaccine: props.values.vaccine.toLowerCase(),
                        };

                        console.log("ProfileForm was submitted");
                        //fetch('https://httpbin.org/post', { method: 'POST', body: body })
                        fetch("/register", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })
                            .then((res) => res.json()) // expecting a json response
                            .then((respJSON) => {
                                console.log(
                                    "AWESOME " + JSON.stringify(respJSON)
                                );
                            });
                    }}
                />
                <Message>
                    <Message.Header>Form data:</Message.Header>
                    <pre>{JSON.stringify(props, null, 2)}</pre>
                </Message>
            </Grid.Column>
            <Grid.Column only="computer"></Grid.Column>
        </Grid>
    </Container>
);

const mapStateToProps = (state) => {
    return state.form.profile
        ? {
              values: state.form.profile.values,
              submitSucceeded: state.form.profile.submitSucceeded,
          }
        : {};
};

export default connect(mapStateToProps)(App);
