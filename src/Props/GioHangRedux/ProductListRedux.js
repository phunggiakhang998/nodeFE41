import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItemRedux from "./ProductItemRedux";

class ProductListRedux extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dssp.map((sp) => {
          //   console.log(sp);

          return (
            <div className="col-sm-4">
              <ProductItemRedux sanPham={sp} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dssp: state.gioHangReducer.danhSachSanPham,
  };
};

export default connect(mapStateToProps)(ProductListRedux);
