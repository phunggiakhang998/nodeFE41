const initialState = {
  danhSachSanPham: [
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
  ],
  danhSachGioHang: [],
};

const gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM": {
      const index = state.danhSachGioHang.findIndex(
        (sp) => sp.maSP === action.sanPham.maSP
      );
      //trường hợp sản phẩm chưa có trong giỏ hàng
      if (index === -1) {
        const sanPham = { ...action.sanPham, soLuong: 1 };
        const danhSachGioHangNew = [...state.danhSachGioHang, sanPham];
        return { ...state, danhSachGioHang: danhSachGioHangNew };
      }
      //trường hợp sản phẩm đã có trong giỏ hàng
      const danhSachGioHangNew = [...state.danhSachGioHang];
      danhSachGioHangNew[index].soLuong += 1;
      return { ...state, danhSachGioHang: danhSachGioHangNew };
    }
    case "TANG_SO_LUONG": {
      const danhSachGioHangNew = [...state.danhSachGioHang];
      const index = danhSachGioHangNew.findIndex(
        (sp) => sp.maSP === action.maSP
      );
      if (index !== -1) {
        danhSachGioHangNew[index].soLuong += 1;
      }
      return { ...state, danhSachGioHang: danhSachGioHangNew };
      // cach 2:
      // const danhSachGioHangNew = state.danhSachGioHang.map(sp=>{
      //   if(sp.maSP===action.maSP){
      //     return {...sp,soLuong:sp.soLuong+1}
      //   }
      //   return sp;
      // })
    }
    case "GIAM_SO_LUONG": {
      const danhSachGioHangNew = state.danhSachGioHang.map((sp) => {
        if (sp.maSP === action.maSP && sp.soLuong > 1) {
          return { ...sp, soLuong: sp.soLuong - 1 };
        }
        return sp;
      });
      return { ...state, danhSachGioHang: danhSachGioHangNew };
    }
    // case "GIAM_SO_LUONG": {
    //   const danhSachGioHangNew = [...state.danhSachGioHang];
    //   const index = danhSachGioHangNew.findIndex(
    //     (sp) => sp.maSP === action.maSP
    //   );
    //   if (index !== -1) {
    //     danhSachGioHangNew[index].soLuong -= 1;
    //     if (danhSachGioHangNew[index].soLuong === 0) {
    //       danhSachGioHangNew.splice(index, 1);
    //     }
    //   }
    //   return { ...state, danhSachGioHang: danhSachGioHangNew };
    // }
    default:
      return state;
  }
};

export default gioHangReducer;
