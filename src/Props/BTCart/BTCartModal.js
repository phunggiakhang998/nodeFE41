import React, { Component } from "react";

export default class BTCartModal extends Component {
  renderGioHang = () => {
    //lay state dataGioHang tu component BTCart.js binding ra giao  dien
    let { gioHang } = this.props;
    return gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>
            <img
              src={spGH.hinhAnh}
              style={{ width: 40, height: 40 }}
              alt="img"
            />
          </td>
          <td>{spGH.tenSP}</td>
          <td>
            <button
              className="btn bg-light"
              onClick={() => {
                this.props.truSanPham(spGH.maSP);
              }}
            >
              -
            </button>
            {spGH.soLuong}
            <button
              className="btn bg-light"
              onClick={() => {
                this.props.congSanPham(spGH.maSP);
              }}
            >
              +
            </button>
          </td>
          <td>{spGH.donGia.toLocaleString()} VND</td>
          <td>{(spGH.donGia * spGH.soLuong).toLocaleString()} VND</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGH.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.donGia);
    }, 0);
  };
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn float-right bg-white"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-shopping-cart" />({this.props.tongSoLuong()})
            Giỏ hàng
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã SP</th>
                        <th>Hình Ảnh</th>
                        <th>Tên SP</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="6" className="text-right">
                          Tổng tiền:
                        </td>
                        <td>{this.tinhTongTien().toLocaleString()} VND</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
