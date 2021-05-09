import React from "react";
import { useFormik } from "formik";
import { Divider, Input, Form, Button } from "semantic-ui-react";

export const ContactForm = () => {
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

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    };

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "Default Last Name",
            ageGroup: "Any",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Field
                    id="firstName"
                    control={Input}
                    type="text"
                    label="First Name"
                    placeholder="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />

                <Form.Field
                    id="lastName"
                    control={Input}
                    type="text"
                    label="Last Name"
                    placeholder="Last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Divider hidden />

            <Form.Group widths="equal">
                <Form.Select
                    label="Age Group"
                    name="ageGroup"
                    options={[
                        { key: "m", text: "18 - 45 Years", value: "18" },
                        { key: "f", text: "45+ Years", value: "45" },
                    ]}
                    placeholder="Age Group"
                    required={true}
                />
            </Form.Group>

            <Divider hidden />

            <Form.Field
                id="email"
                control={Input}
                type="text"
                label="Email"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                    formik.touched.email &&
                    formik.errors.email && {
                        content: formik.errors.email,
                        pointing: "below",
                    }
                }
            />
            <Button content="Submit" type="submit" primary />
        </Form>
    );
};
