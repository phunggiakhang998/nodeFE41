import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    //this.props là thuộc tính của class component nhận giá trị từ component cha truyền vào, và không được gán lại giá trị khác
    let { productData } = this.props;
    return (
      <div className="container">
        <div className="card text-white bg-secondary" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src="https://picsum.photos/300/200"
            alt="123"
          />
          <div className="card-body">
            <h4 className="card-title">{productData.name}</h4>
            <p className="card-text">{productData.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
