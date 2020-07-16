import React, { Component } from "react";

export default class BTProductItem extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div>
        <div className="card text-dark bg-white" style={{ minHeight: "510px" }}>
          <img
            className="card-img-top"
            src={phone.hinhAnh}
            alt="img"
            style={{ height: 350 }}
          />
          <div className="card-body bg-light">
            <h4 className="card-title">{phone.tenSP}</h4>
            <p className="card-text">{phone.giaBan.toLocaleString()} VND</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.props.themGioHang(phone);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
