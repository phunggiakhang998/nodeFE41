import React, { Component } from "react";
import { connect } from "react-redux";
import { tangSoLuong, giamSoLuong } from "../../actions/gioHangAction";
import { tinhTongTien } from "../../selectors/gioHangSelectors";

class CartModalRedux extends Component {
  render() {
    // const tongTien = this.props.dsGH.reduce((tong, sp) => {
    //   return (tong += sp.giaBan * sp.soLuong);
    // }, 0);
    return (
      <div>
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
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.dsGH.map((sp) => (
                      <tr>
                        <td>
                          <img
                            src={sp.hinhAnh}
                            alt={sp.hinhAnh}
                            width="40px"
                            height="40px"
                          />
                        </td>
                        <td>{sp.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => this.props.giamSoLuong(sp.maSP)}
                          >
                            -
                          </button>
                          <span className="mx-2">{sp.soLuong}</span>
                          <button
                            className="btn btn-primary"
                            onClick={() => this.props.tangSoLuong(sp.maSP)}
                          >
                            +
                          </button>
                        </td>
                        <td>{sp.giaBan.toLocaleString()} VND</td>
                        <td>{(sp.giaBan * sp.soLuong).toLocaleString()} VND</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    {this.props.dsGH.length && (
                      <tr>
                        <td colSpan="5" className="text-right">
                          Tổng tiền:
                        </td>
                        <td>{this.props.tongTien.toLocaleString()} VND</td>
                      </tr>
                    )}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGH: state.gioHangReducer.danhSachGioHang,
    // tongTien: state.gioHangReducer.danhSachGioHang.reduce((tong, sp) => {
    //   return (tong += sp.giaBan * sp.soLuong);
    // }, 0),
    tongTien: tinhTongTien(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //Hạn chế trực tiieeps dispatch type trực tiếp trong component
    //nên tạo 1 action
    tangSoLuong: (maSP) => dispatch(tangSoLuong(maSP)),
    giamSoLuong: (maSP) => dispatch(giamSoLuong(maSP)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);
