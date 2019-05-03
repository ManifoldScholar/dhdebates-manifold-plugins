import React, { Component } from "react";

export default class FooterLogic extends Component {

  render() {
    return this.props.children("left");
  }
}
