import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = (name) => {
    alert("Hello " + name);
  };

  render() {
    return (
      <div className="container">
        {/* <button
          onClick={()=> {
            alert("Hello FE 41");
          }}
          id="btnShowMess"
          className="btn btn-success"
        >
          Show Message
        </button> */}

        {/* <button
          onClick={this.handleClick.bind(this, "Khang")}
          id="btnShowMess"
          className="btn btn-success"
        >
          Show Message
        </button> */}

        <button
          onClick={() => {
            this.handleClick("khang");
          }}
          id="btnShowMess"
          className="btn btn-success"
        >
          Show Message
        </button>
      </div>
    );
  }
}
