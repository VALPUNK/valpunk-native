import { Icon } from "native-base";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { TextFieldInput, TextFieldInputProps } from "../../basic/index";

export const TextFieldPhone = (props: TextFieldInputProps) => {
  const onPress = () => {
    console.log("hi");
  };
  return (
    <TextFieldInput
      type="phone"
      keyboardType="phone-pad"
      renderAccessory={PhoneButton}
      style={{ display: "flex", flex: 1, backgroundColor: "blue" }}
      {...props}
    />
  );
};

const PhoneButton = () => {
  const onPress = () => {
    console.log("hi");
  };
  return (
    <TouchableOpacity>
      <Icon type="FontAwesome" name="phone" onPress={onPress} />
    </TouchableOpacity>
  );
};
