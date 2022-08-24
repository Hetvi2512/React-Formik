import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function LoginForm(props) {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="chakraInput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakraInput"
              type="password"
              label="Password"
              name="password"
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
