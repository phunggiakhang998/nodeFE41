import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import BTSmartPhone from "./BTSmartPhone";
import BTLaptop from "./BTLaptop";
import BTFooter from "./BTFooter";

export default class BaiTapDanLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTSmartPhone />
        <BTLaptop />
        <BTFooter />
      </div>
    );
  }
}
