import * as React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { handleTextInput } from "react-native-formik";
import { compose } from "recompose";

export interface TextFieldInputProps extends TextInputProps {
  label?: string;
  name?: string;
  type?: string;
  error?: string;
}

const basicFontSize: number = 16;

// export interface BasicInputInterface extends TextInputProps {
//   label?: string;
//   test: string;
// }

class BasicInput extends React.Component<TextFieldInputProps> {
  public render() {
    const { label } = this.props;
    return (
      <View>
        <View>
          <Text style={{ fontSize: basicFontSize * 1 }}>{label}</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <TextInput
            // defaultValue="hello"
            style={{ fontSize: basicFontSize * 1.1 }}
            placeholder="Placce text here"
          />
        </View>
        <View>
          <Text style={{ fontSize: basicFontSize * 0.9 }}>
            {this.props.error}
          </Text>
        </View>
      </View>
    );
  }
}
export const TextFieldBase: React.ComponentClass<
  TextFieldInputProps,
  any
> = compose(
  handleTextInput
  // withNextInputAutoFocusInput
)(BasicInput);

/*
  TODO:
    Required
    Disabled = 0 Interaction
    Editable = Can't edit, but can interact
    Error State
    helperText (I think is called something else, like name or title)
    defaultValue
    label
    clear
    setValue("") (uses ref to change the value)
    active / focus state
*/

export const FinalInput = (props: TextFieldInputProps) => {
  return <TextFieldBase {...props} />;
};
