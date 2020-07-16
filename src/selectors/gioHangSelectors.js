export const tinhTongTien = (state) => {
  return state.gioHangReducer.danhSachGioHang.reduce(
    (tong, sp) => (tong += sp.giaBan * sp.soLuong),
    0
  );
};
