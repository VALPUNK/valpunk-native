import React from "react";
import {
  handleTextInput,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField, TextFieldProps } from "react-native-material-textfield";
import { compose } from "recompose";

export interface TextFieldInputProps extends TextFieldProps {
  label?: string;
  name?: string;
  type?: string;
}

export const TextFieldBase: React.ComponentClass<
  TextFieldInputProps,
  any
> = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

export const TextFieldInput = (props: TextFieldInputProps) => {
  // const isDisabled = !editable;
  const disabledProps: TextFieldInputProps = {
    // disabledLineWidth: isDisabled ? 0 : 1,
    // disabled: isDisabled
  };

  const inputStyle: TextFieldInputProps = {};

  return (
    <TextFieldBase
      {...props}
      style={inputStyle}
      // editable={false}
      {...disabledProps}
    />
  );
};
