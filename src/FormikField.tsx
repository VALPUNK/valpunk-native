import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View
} from "react-native";
import { FieldProps, getIn } from "formik";

interface FormikFieldProps
  extends FieldProps,
    Omit<TextInputProps, "onChange" | "value"> {
  disabled?: boolean;
  helperText?: string;
}

// A converter of props to TextInput friendly values

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: FormikFieldProps): FormikFriendlyInputProps => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled
  };
};

interface FormikFriendlyInputProps extends TextInputProps {
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  name?: string;
}

export const FormikFriendlyInput = (props: FormikFriendlyInputProps) => {
  // Do a bunch of formik things

  return <TextInput {...props} />;
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const FixedLabel = (props: {
  labelTextProps?: TextProps;
  inputTextProps?: TextInputProps;
  labelText?: string;
  disabled?: boolean;
  required?: boolean; // todo
  error?: boolean;
}) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Text {...props.labelTextProps}>{props.labelText}</Text>
      <TextInput
        placeholder="test"
        editable={!props.disabled}
        style={
          props.disabled ? styles.uneditableTextInput : styles.editableTextInput
        }
        {...props.inputTextProps}
      />
      <Text {...props.labelTextProps}>Error!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editableTextInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  uneditableTextInput: {}
});
