import React, { Component } from "react";

export default class BTPhoneItem extends Component {
  render() {
    let { phone, xemChiTiet } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={phone.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{phone.tenSP}</h4>
            <p className="card-title">{phone.giaBan.toLocaleString()}</p>
            <button
              className="btn bg-dark text-light"
              onClick={() => {
                this.props.xemChiTiet(phone);
              }}
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
