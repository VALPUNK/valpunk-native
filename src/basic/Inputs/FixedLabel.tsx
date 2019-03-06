import { Input, Item, Label } from "native-base";
import React, { Component } from "react";

export default class FixedLabel extends Component {
  public render() {
    return (
      <Item fixedLabel>
        <Label>Username</Label>
        <Input />
      </Item>
    );
  }
}
