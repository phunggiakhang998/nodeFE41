import React, { Component } from "react";

export default class Child extends Component {
  //Chạy sau khi state,hoặc props thay đổi, và chạy trước render
  //Nếu mình return về true thì hàm render sẽ được chạy
  //return về false thì hàm render sẽ không được gọi lại
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === "CyberSoft") {
      return true;
    }
    return false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  //thay thees cho componentWillReceiveProps
  //chạy sau khi props thay đổi và chạy trước shouldComponentupdate
  //Dùng để thay đổi state khi props thay đổi
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.name === "CyberSoft") {
      return {
        currenName: nextProps.name,
      };
    }
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Child render");
    console.log(this.state);
    return <div>{this.props.name}</div>;
  }
}
