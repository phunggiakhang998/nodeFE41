import React, { Component } from "react";
import { connect } from "react-redux";
import { themSanPhamAction } from "../../actions/gioHangAction";

class ProductItemRedux extends Component {
  render() {
    const { sanPham } = this.props;
    console.log(sanPham);

    return (
      <div className="card text-dark bg-white" style={{ minHeight: "510px" }}>
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          style={{ height: 350 }}
        />
        <div className="card-body bg-light">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()} VND</p>
          <button
            className="btn btn-dark"
            onClick={() => this.props.themSanPham(sanPham)}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    themSanPham: (sanPham) => dispatch(themSanPhamAction(sanPham)),
  };
};

export default connect(null, mapDispathToProps)(ProductItemRedux);
