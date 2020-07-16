import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  renderPhone = () => {
    return this.props.dataPhone.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <BTProductItem phone={phone} themGioHang={this.props.themGioHang} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center my-5">BÀI TẬP GIỎ HÀNG</h3>
        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
