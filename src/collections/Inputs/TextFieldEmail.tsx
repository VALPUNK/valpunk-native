import { TextFieldInput, TextFieldInputProps } from "../../basic/index";
import * as React from "react";

export const TextFieldEmail = (props: TextFieldInputProps) => {
  return (
    <TextFieldInput type="email" keyboardType="email-address" {...props} />
  );
};
