import React from "react";
import { useFormik } from "formik";
import { Input, Form, Button } from "semantic-ui-react";

export const ContactForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "Default Last Name",
        },
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

                    <Form.Field
                        id="email"
                        control={Input}
                        type="text"
                        label="Email"
                        placeholder="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                <Form.Button content="Submit" primary/>
            </Form>
    );
};

/*
import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";

export const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            console.log("On Submit was called");
            //alert("Ok Form was submitted " + JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.onSubmit}>
            <Form.Input 
        id="email" 
        name="email" 
        type="email"
        onChange={formik.onChange}
        value={formik.values.email}
        placeholder="Please Enter Email" 

        />
        <Button content="Submit" type="submit" />
        </form>
    );
};
*/
