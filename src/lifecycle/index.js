import React, { Component } from "react";
import Child from "./Child";
import Pure from "./Pure";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      name: "Hello",
    };
  }

  //Được chạy 1 lần sau khi hàm render chạy xong
  //gọi API, tươn tác với DOM, setTimeout, setinterval
  //Những hoạt động liên quan tới side effect
  componentDidMount() {
    console.log("componentDidMount");
  }

  //Chay sau khi state hoặc props thay đổi
  //chạy sau hàm render
  //setState,gọi API...
  //Cần có điều kiện dừng
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  render() {
    console.log("render");

    return (
      <div>
        <h1 className="text-center">Life Cycle</h1>
        <button onClick={() => this.setState({ name: "CyberSoft" })}>
          Click
        </button>
        {/* {this.state.name !== "CyberSoft" ? (
          <Child name={this.state.name} />
        ) : null} */}
        <button onClick={() => this.forceUpdate()}>Force Update</button>
        {this.state.name !== "Cybersoft" ? (
          <Child name={this.state.name} />
        ) : null}
        <Pure name="ABC" />
      </div>
    );
  }
}
