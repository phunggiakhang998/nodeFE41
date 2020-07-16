import React, { Component } from "react";
import { connect } from "react-redux";
import {
  suaSinhVienAction,
  xoaSinhVienAction,
  chonSinhVienAction,
} from "../actions/sinhVienAction";

class TableSV extends Component {
  render() {
    return (
      <div className="container">
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Mã Sinh Viên</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.danhSachSinhVien.map((sv) => (
              <tr>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.soDT}</td>
                <td>{sv.email}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => this.props.chonSinhVien(sv)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.xoaSinhVien(sv)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachSinhVien: state.sinhVienReducer.danhSachSinhVien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonSinhVien: (sinhVien) => dispatch(chonSinhVienAction(sinhVien)),
    xoaSinhVien: (sinhVien) => dispatch(xoaSinhVienAction(sinhVien)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableSV);
