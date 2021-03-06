import { React, useState } from "react";
import { useFormik } from "formik";
import { Message, Divider, Input, Form, Button } from "semantic-ui-react";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactForm = (props) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted

    const [isValidForm, setIsValidForm] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
            firstName: "",
            lastName: "",
            ageGroup: "18",
            price: "ANY",
            vaccine: "ANY",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            phone: Yup.string().matches(
                phoneRegExp,
                "Phone number is not valid"
            ),
        }),
        onSubmit: (values) => {
            setIsValidForm(props.onSubmit(values)) 
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
    <div>
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
                    error={
                        formik.touched.firstName &&
                        formik.errors.firstName && {
                            content: formik.errors.firstName,
                            pointing: "above",
                        }
                    }
                />

                <Form.Field
                    id="lastName"
                    control={Input}
                    type="text"
                    label="Last Name"
                    placeholder="Last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.lastName &&
                        formik.errors.lastName && {
                            content: formik.errors.lastName,
                            pointing: "above",
                        }
                    }
                />
            </Form.Group>

            <Divider hidden />

            <Form.Group widths="equal">
                <Form.Select
                    label="Age Group"
                    name="ageGroup"
                    options={[
                        { key: "18", text: "18 - 45 Years", value: "18" },
                        { key: "45", text: "45+ Years", value: "45" },
                    ]}
                    placeholder="Age Group"
                    defaultValue="18"
                    required={true}
                />

                <Form.Select
                    label="Price"
                    name="price"
                    options={[
                        { key: "ANY", text: "Any", value: "ANY" },
                        { key: "FREE", text: "Free", value: "FREE" },
                        { key: "PAID", text: "Paid", value: "PAID" },
                    ]}
                    placeholder="Price"
                    defaultValue="ANY"
                    required={true}
                />

                <Form.Select
                    label="Vaccine Choice"
                    name="vaccine"
                    options={[
                        { key: "ANY", text: "Any", value: "ANY" },
                        { key: "COVI", text: "COVISHEILD", value: "COVI" },
                        { key: "COVAX", text: "COVAXIN", value: "COVAX" },
                    ]}
                    placeholder="Select your Vaccine"
                    defaultValue="ANY"
                    required={true}
                />
            </Form.Group>

            <Divider hidden />

            <Form.Group widths="equal">
            <Form.Field
                id="email"
                control={Input}
                type="text"
                label="Email"
                icon="at"
                iconPosition="left"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required={true}
                error={
                    formik.touched.email &&
                    formik.errors.email && {
                        content: formik.errors.email,
                        pointing: "above",
                    }
                }
            />
            <Form.Field
                id="phone"
                control={Input}
                type="text"
                label="Phone"
                icon="phone"
                iconPosition="left"
                placeholder="Enter Mobile Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={
                    formik.touched.phone &&
                    formik.errors.phone && {
                        content: formik.errors.phone,
                        pointing: "above",
                    }
                }
            />
            
            </Form.Group>

        <Button content="Submit" type="submit" primary />
            <Button content="Reset" type="reset" />
        </Form>

       {isValidForm &&  <Message>
                    <Message.Header>Form data:</Message.Header>
                    <pre>{JSON.stringify(props, null, 2)}</pre>
                </Message>}
    </div>
    );
};
