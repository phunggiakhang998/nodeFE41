import React, { Component } from "react";
import ProductListRedux from "./ProductListRedux";
import CartModalRedux from "./CartModalRedux";

export default class CartsRedux extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bài tập giỏi hàng REDUX</h1>
        <button
          type="button"
          className="btn float-right bg-white"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa fa-shopping-cart" /> Giỏ hàng
        </button>
        <ProductListRedux />
        <CartModalRedux />
      </div>
    );
  }
}
