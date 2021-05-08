import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Icon, Form, Message, Input, Divider } from "semantic-ui-react";


const validate = values => {
  const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}
const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
const phone = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;

const renderSelect = (field) => (
    <Form.Select
        label={field.label}
        name={field.input.name}
        onChange={(e, { value }) => field.input.onChange(value)}
        options={field.options}
        placeholder={field.placeholder}
        value={field.input.value}
    />
);

const renderField = (field) => (
    <Form>
        <Input
            label="Email"
            placeholder="joe@schmoe.com"
            icon="at"
            iconPosition="left"
        />
    </Form>
    /*
    <Input iconPosition="left" placeholder="Email">
        <Icon name="at" />
        <input />
    </Input>

    <Form.Field
        name={field.input.name}
        control={Input}
        label={field.label}
        placeholder={field.placeholder}
    />
*/
);

const ProfileForm = (props) => {
    const { handleSubmit, reset } = props;

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Field
                        component={Form.Input}
                        label="First name"
                        name="firstName"
                        placeholder="First name"
                        required={true}
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
                        name="ageGroup"
                        options={[
                            { key: "m", text: "18 - 45 Years", value: "18" },
                            { key: "f", text: "45+ Years", value: "45" },
                        ]}
                        placeholder="Age Group"
                        required={true}
                    />
                    <Field
                        component={renderSelect}
                        label="Vaccine Choice"
                        name="vaccine"
                        options={[
                            { key: "ANY", text: "Any", value: "ANY" },
                            { key: "COVI", text: "COVISHEILD", value: "COVI" },
                            { key: "COVAX", text: "COVAXIN", value: "COVAX" },
                        ]}
                        placeholder="Select your Vaccine"
                        required={true}
                    />
                    <Field
                        component={renderSelect}
                        label="Price"
                        name="price"
                        options={[
                            { key: "ANY", text: "Any", value: "ANY" },
                            { key: "FREE", text: "Free", value: "FREE" },
                            { key: "PAID", text: "Paid", value: "PAID" },
                        ]}
                        placeholder="Price"
                        required={true}
                    />
                </Form.Group>

                <Divider hidden />
                <Form.Group widths="equal">
                    <Field
                        component={Form.Input}
                        label="Email"
                        name="email"
                        type="email"
                        icon = "at"
                        iconPosition= "left"
                        placeholder="john.doe@gmail.com"
                        required={true}                 
        validate={email}
                    />
                    <Field
                        component={Form.Input}
                        label="Phone"
                        name="phone"
                        type="phone"
                        icon = "phone"
                        iconPosition= "left"
                        placeholder="10-digit phone number"
                        //validate={phone}
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
                header="Form Completed"
                content="You're signed up for Vaccination appointment alerts. We will send you an email when a vaccination slot is available."
            />

            <Message
                error
                header="Registration Failed"
                content="The email you entered is already regsitered."
            />
        </Fragment>
    );
};

export default reduxForm({
    form: "profile",
    validate
})(ProfileForm);
