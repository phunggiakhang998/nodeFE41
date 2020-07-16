import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import BTSmartPhone from "./BTSmartPhone";
import BTLaptop from "./BTLaptop";
import BTFooter from "./BTFooter";

export default class BaiTapDanLayout extends Component {
  dataproduct = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    {
      maSP: 2,
      tenSP: "Iphone X",
      hinhAnh: "./img/sp_iphoneX.png",
      gia: 2000,
    },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 4, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 4000 },
  ];
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <BTSmartPhone dataProduct={this.dataproduct} />
        <BTLaptop />
        <BTFooter />
      </div>
    );
  }
}
