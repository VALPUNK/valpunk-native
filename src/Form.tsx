import { Formik } from "formik";
import React from "react";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View
} from "react-native";
import { withNextInputAutoFocusForm } from "react-native-formik";
import * as Yup from "yup";
import {
  TextFieldEmail,
  TextFieldLarge,
  TextFieldPhone,
  TextFieldStandard
} from "./collections";

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, "Need more than 2 characters")
});

export const FormikForm = () => (
  <Formik
    onSubmit={values => console.log(values)}
    initialValues={{}}
    validationSchema={validationSchema}
    render={formikProps => {
      const handleSubmit = (_ev: NativeSyntheticEvent<NativeTouchEvent>) => {
        formikProps.handleSubmit();
      };

      return (
        <Form>
          <TextFieldStandard label="Small Textfield" name="small_textfield" />
          <TextFieldLarge label="Large Textfield" name="large_textfield" />
          <TextFieldEmail label="Email" name="email" />
          <TextFieldPhone
            label="Phone"
            name="phone"
            defaultValue={"1234567"}
            // editable={false}
            prefix=" "
            title="Required"
          />
          <Button onPress={handleSubmit} title="SUBMIT" />
        </Form>
      );
    }}
  />
);
