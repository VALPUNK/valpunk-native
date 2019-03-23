import React from "react";
import { handleTextInput } from "react-native-formik";
import { compose } from "recompose";
import TextField, { TextFieldProps } from "../../TestField/components/field";

export interface TextFieldInputProps extends TextFieldProps {
  label?: string;
  name?: string;
  type?: string;
  required?: boolean;
}

export const TextFieldBase: React.ComponentClass<
  TextFieldInputProps,
  any
> = compose(
  handleTextInput
  // withNextInputAutoFocusInput
  // @ts-ignore
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
