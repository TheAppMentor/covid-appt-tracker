import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Message, Input, Divider } from "semantic-ui-react";

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined


const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

const renderField = field => (
        <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={field.validate ? null : { 
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
)

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);

const ProfileForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Fragment>
      <Message info>
        <p>
          You will don't need any special mappings for <code>Form.Input</code>,
          because it passed events from native inputs.
        </p>

        <p>
          The situation with other components is more complicated, because the{" "}
          <code>Field</code> relies on the native events. However, it can be
          easily with{" "}
          <a
            href="https://redux-form.com/7.4.2/docs/api/field.md/#2-a-stateless-function"
            target="_blank"
          >
            stateless function
          </a>. We recomend to wrap them with generic components to reduce forms
          complexivity.
        </p>
      </Message>

      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Field
            component={Form.Input}
            label="First name"
            name="firstName"
            placeholder="First name"
          />
          <Field
            component={Form.Input}
            label="Last name"
            name="lastName"
            placeholder="Last name"
          />
        </Form.Group>

    <Divider hidden />


        <Form.Group widths="equal">
          <Field
            component={renderSelect}
            label="Age Group"
            name="agegroup"
            options={[
              { key: "m", text: "18 - 45 Years", value: "18" },
              { key: "f", text: "45+ Years", value: "45" }
            ]}
            placeholder="Age Group"
          />
          <Field
            component={renderSelect}
            label="Vaccine Choice"
            name="vaccine"
            options={[
              { key: "ANY", text: "Any", value: "ANY" },
              { key: "COVI", text: "COVISHEILD", value: "COVI" },
              { key: "COVAX", text: "COVAXIN", value: "COVAX" }
            ]}
            placeholder="Select your Vaccine"
          />
        </Form.Group>

      <Divider hidden />
        <Form.Group widths="equal">
      <Field name="email" 
            type="email"
            component={renderField} 
            label="Email"
            validate={email}
      />
      
      <Field name="phone" 
            type="phone"
            component={renderField} 
            label="Phone"
            validate={email}
      />
        </Form.Group>
      
      <Divider hidden />

        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={reset}>Reset</Form.Button>
        </Form.Group>
      </Form>

    <Message
      success
      header='Form Completed'
      content="You're signed up for Vaccination appointment alerts. We will send you an email when a vaccination slot is available."
    />

    <Message
      error
      header='Registration Failed'
      content='The email you entered is already regsitered.'
    />

    </Fragment>
  );
};

export default reduxForm({
  form: "profile"
})(ProfileForm);
