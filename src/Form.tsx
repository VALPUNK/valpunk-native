import { Formik } from "formik";
import React from "react";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  View
} from "react-native";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField, TextFieldProps } from "react-native-material-textfield";
import { compose } from "recompose";
import * as Yup from "yup";

interface TextFieldInputProps extends TextFieldProps {
  label?: string;
  name?: string;
  type?: string;
}

const TextFieldInput: React.ComponentClass<TextFieldInputProps, any> = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("please! email?")
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, "pretty sure this will be hacked")
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
          <TextFieldInput
            label="Small Textfield"
            name="small_textfield"
            type="name"
          />
          <TextFieldInput
            label="Large Textfield"
            name="large_textfield"
            type="name"
            numberOfLines={5}
            multiline
          />
          <TextFieldInput
            label="Email"
            name="email"
            type="email"
            keyboardType="email-address"
          />
          <TextFieldInput label="Password" name="password" type="password" />
          <TextFieldInput label="First Name" name="firstName" type="name" />
          <TextFieldInput
            label="Phone"
            name="phone"
            type="phone"
            keyboardType="phone-pad"
            // disabled
            // defaultValue="default value"
            // disabledLineWidth={0}
            // editable={false}
          />
          <Button onPress={handleSubmit} title="SUBMIT" />
        </Form>
      );
    }}
  />
);
