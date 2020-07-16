import React, { Component } from "react";
import { connect } from "react-redux";
import {
  themSinhVienAction,
  xoaSinhVienAction,
  suaSinhVienAction,
} from "../actions/sinhVienAction";

class FormThemSV extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDT: "",
    },
  };
  handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);

    this.setState(
      (state) => {
        return {
          values: {
            ...state.values,
            [name]: value,
          },
        };
      },
      () => {
        //Tham số thứ 2 của setState là 1 hàm callbaack
        //Hàm này sẽ được gọi sau khi setState xong
        //Ta sẽ nhận được kết quả sau khi setState trong đây
        console.log("Đã thay đổi", this.state);
      }
    );
    console.log("Chưa thay đổi", this.state);

    //Cach 2:
    // const values = { ...this.state.values };
    // this.setState({
    //   values: {
    //     ...values,
    //     [name]: value,
    //   },
    // });
  };
  handleSubmit = () => {
    console.log(this.state);
    let hasError = false;
    const state = this.state;
    for (let key in this.state.values) {
      const error = this.validation(key, this.state.values[key]);
      if (error) {
        this.setState((state) => {
          return {
            errors: {
              ...state.errors,
              [key]: error,
            },
          };
        });
        hasError = true;
      }
    }
    if (hasError) return;
    //xử lý gọi action themSinh Vien
    this.props.themSinhVien(this.state.values);
  };
  handleBlur = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    const error = this.validation(name, value);

    const state = this.state;
    this.setState({
      errors: {
        ...state.errors,
        [name]: error,
      },
    });
  };

  validation = (name, value) => {
    if (name === "maSV") {
      return value ? "" : "Mã sinh viên không được để trống";
    }
    if (name === "hoTen") {
      return value ? "" : "Họ tên không được để trống";
    }
    if (name === "soDT") {
      return value ? "" : "Số điện thoai không được để trống";
    }
    if (name === "email") {
      if (!value) {
        return "Email không được để trống";
      }
      if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
        return "Định dạng email không hợp lệ";
      }
    }
    return "";
  };

  //Khi props sinhVienDangChon thay dổi, sẽ chạy lại componentDidUpdate
  //trong đây phải kiểm tra sinhVienDangChon có thay đổi hay không
  //nếu thay đổi sẽ setState lại obj values bằng sinhVienDangChon mới
  componentDidUpdate(prevProps) {
    if (prevProps.sinhVienDangChon.maSV !== this.props.sinhVienDangChon.maSV) {
      this.setState({
        values: this.props.sinhVienDangChon,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Mã Sinh Viên</label>
              <input
                type="text"
                name="maSV"
                className="form-control"
                value={this.state.values.maSV}
                // onChange={(evt) => this.setState({ maSV: evt.target.value })}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.maSV && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.maSV}</span>
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Số Điện Thoại</label>
              <input
                type="tel"
                name="soDT"
                className="form-control"
                value={this.state.values.soDT}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.soDT && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.soDT}</span>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Họ Tên</label>
              <input
                type="text"
                name="hoTen"
                className="form-control"
                value={this.state.values.hoTen}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.hoTen && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.hoTen}</span>
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={this.state.values.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.email && (
                <div className="alert alert-danger">
                  <span>{this.state.errors.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Thêm Sinh Viên
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => dispatch(themSinhVienAction(sinhVien)),
  };
};
const mapStateToProps = (state) => {
  return {
    sinhVienDangChon: state.sinhVienReducer.sinhVienDangChon,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormThemSV);
