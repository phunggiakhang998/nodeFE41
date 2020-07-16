import React, { Component } from "react";
import BTItem from "./BTItem";

export default class BTSmartPhone extends Component {
  renderProduct = (dataProduct) => {
    let content = dataProduct.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <BTItem productData={product} />
        </div>
      );
    });
    return content;
  };

  render() {
    console.log("BTSmartPhone", this.props.dataProduct);
    let { dataProduct } = this.props;
    return (
      <div className="container-fluid">
        <h3 className="text-center display-4 text-dark font-weight-bold">
          Danh Sách Sản Phẩm
        </h3>
        <div className="row">{this.renderProduct(dataProduct)}</div>
      </div>
    );
  }
}
