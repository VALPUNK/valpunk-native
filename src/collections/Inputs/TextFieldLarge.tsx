import { TextFieldInput, TextFieldInputProps } from "../../basic/index";
import * as React from "react";

export const TextFieldLarge = (props: TextFieldInputProps) => {
  return <TextFieldInput type="name" numberOfLines={5} multiline {...props} />;
};
