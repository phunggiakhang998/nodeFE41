import React, { Component } from "react";

export default class BTProductItem extends Component {
  renderProduct = (dataProduct) => {
    let content = dataProduct.map((product, index) => {
      return (
        <div className="col-3 my-2" key={index}>
          <div className="card text-dark bg-light">
            <img className="card-img-top" src={product.image} alt />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
              <button className="btn bg-dark text-white">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      );
    });
    return content;
  };
  render() {
    let { productData } = this.props;
    return (
      <div className="container">
        <h3 className="text-center display-4 text-dark font-weight-bold">
          Danh Sách Sản Phẩm
        </h3>
        <div className="row">{this.renderProduct(this.props.dataProduct)}</div>
      </div>
    );
  }
}
