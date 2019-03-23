import { TextFieldInput, TextFieldInputProps } from "../../basic/index";
import * as React from "react";

export const TextFieldPassword = (props: TextFieldInputProps) => {
  return <TextFieldInput name="password" type="password" {...props} />;
};
