import * as Expo from "expo";
import * as React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { FormikForm } from "./Form";

export default class FixedLabelExample extends React.Component<
  {},
  { isReady: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  public async componentDidMount() {
    // if (releaseChannel !== "dev") {
    //   const update = await Expo.Updates.checkForUpdateAsync()
    //   if (update) {
    //     Expo.Updates.reload()
    //   }
    // }
    await Expo.Font.loadAsync({
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf")
    });

    this.setState({ isReady: true });
  }

  public render() {
    if (!this.state.isReady) {
      return (
        <SafeAreaView
          style={{
            padding: Platform.OS === "android" ? StatusBar.currentHeight : 0
          }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </SafeAreaView>
      );
    }
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
