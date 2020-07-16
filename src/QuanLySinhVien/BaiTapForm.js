import React, { Component } from "react";
import FormThemSV from "./FormThemSV";
import TableSV from "./TableSV";

export default class BaiTapForm extends Component {
  render() {
    return (
      <div>
        <FormThemSV />
        <TableSV />
      </div>
    );
  }
}
