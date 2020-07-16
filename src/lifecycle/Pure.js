import React, { Component, PureComponent } from "react";

//Purecomponent sẽ tự handle life cycle shouldComponentUpdate
//Nó chỉ compare được các gtri primitive(string,number,boolean)
//không nên lạm dụng sử dụng PureComponent
export default class Pure extends PureComponent {
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return <div></div>;
  }
}
