import React from "react";
import { connect } from "react-redux";
import { Grid, Segment, Container, Divider, Header, Message } from "semantic-ui-react";

import ProfileForm from "./components/contactform";

const App = props => (
  <Container>
    <Divider hidden />

    <Grid columns='equal'>
<Grid.Column only='computer'>
    </Grid.Column>
    
    <Grid.Column computer={10} mobile={16} tablet={16}>
    <Header as="h1" dividing>
        Register for Covid Appointment   
    </Header>

    <ProfileForm onSubmit={() => console.log("ProfileForm was submitted")} />

    <Message>
      <Message.Header>Form data:</Message.Header>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Message>
    </Grid.Column>
<Grid.Column only='computer'>
    </Grid.Column>
    </ Grid >
  </Container>
);

const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        submitSucceeded: state.form.profile.submitSucceeded
      }
    : {};
};

export default connect(mapStateToProps)(App);
