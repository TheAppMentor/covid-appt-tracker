import React from "react";
import { Grid, Container, Divider, Header, Message } from "semantic-ui-react";

import { ContactForm } from './components/ContactForm'
import { saveUser } from './NetworkHandler'

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

                <ContactForm onSubmit={saveUser}/>

            </Grid.Column>
            <Grid.Column only="computer"></Grid.Column>
        </Grid>
    </Container>
);

export default App;
