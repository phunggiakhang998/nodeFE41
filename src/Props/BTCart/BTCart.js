import React, { Component } from "react";
import BTCartModal from "./BTCartModal";
import BTProductList from "./BTProductList";

export default class BTCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/images/img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/images/img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/images/img/applephone.jpg",
    },
  ];
  state = {
    gioHang: [
      //   {
      //     maSP: 1,
      //     hinhAnh: "./img/images/img/vsphone.jpg",
      //     tenSP: "IphoneX",
      //     soLuong: 1,
      //     donGia: 27000000,
      //   },
    ],
  };

  themGioHang = (spClick) => {
    console.log("San pham duoc lick", spClick);
    //tao ra 1 san pham gio hang
    let spGH = {
      maSP: spClick.maSP,
      hinhAnh: spClick.hinhAnh,
      tenSP: spClick.tenSP,
      soLuong: 1,
      donGia: spClick.giaBan,
    };
    let gioHangCapNhat = [...this.state.gioHang];

    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === spGH.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGH);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tinhTongSoLuongGioHang = () => {
    return this.state.gioHang.reduce((tongSoLuong, spGH, index) => {
      return (tongSoLuong += spGH.soLuong);
    }, 0);
  };

  xoaGioHang = (maSP) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let i = gioHangCapNhat.findIndex((spGH) => spGH.maSP === maSP);
    if (i !== -1) {
      gioHangCapNhat.splice(i, 1);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  congSanPham = (maSP) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(maSP);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  truSanPham = (maSP) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong -= 1;
      if (gioHangCapNhat[index].soLuong === 0) {
        gioHangCapNhat.splice(index, 1);
      }
    } else {
      gioHangCapNhat.push(maSP);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    return (
      <div>
        <BTCartModal
          gioHang={this.state.gioHang}
          tongSoLuong={this.tinhTongSoLuongGioHang}
          xoaGioHang={this.xoaGioHang}
          congSanPham={this.congSanPham}
          truSanPham={this.truSanPham}
        />
        <BTProductList
          dataPhone={this.dataPhone}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}
