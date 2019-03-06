import * as React from "react";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";
import { FormikForm } from "./Form";

export default class FixedLabelExample extends React.Component {
  public render() {
    return (
      <SafeAreaView
        style={{
          padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
      >
        <FormikForm />
      </SafeAreaView>
    );
  }
}

export const FormView = (props: { children: React.ReactNode }) => (
  <View style={{ display: "flex", justifyContent: "space-evenly" }}>
    {props.children}
  </View>
);
