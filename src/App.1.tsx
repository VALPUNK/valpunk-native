import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View
} from "react-native";

export default class FixedLabelExample extends React.Component {
  public render() {
    return (
      <SafeAreaView
        style={{
          padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
      >
        <FormView>
          <FixedLabel labelText="The Label" />
          <FixedLabel labelText="The Required" />
          <FixedLabel labelText="The Error" />
          <FixedLabel labelText="The Label" />
          <FixedLabel labelText="The Label" />
        </FormView>
      </SafeAreaView>
    );
  }
}

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

export const FormView = (props: { children: React.ReactNode }) => (
  <View style={{ display: "flex", justifyContent: "space-evenly" }}>
    {props.children}
  </View>
);
