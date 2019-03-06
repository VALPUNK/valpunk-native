import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text } from "react-native";
import { Container, Header, Content, Form } from "native-base";
import { FixedLabel } from "../../src";

const style = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF"
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf("CenteredView", module).add("default view", () => (
  <Container>
    <Header />
    <Content>
      <Form>
        <FixedLabel />
      </Form>
    </Content>
  </Container>
));
