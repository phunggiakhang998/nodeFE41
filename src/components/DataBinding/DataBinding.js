import React, { Component } from "react";

export default class DataBinding extends Component {
  hocVien = {
    ma: 1,
    hoTen: "Nguyen Van A",
    hinhAnh:
      "https://sicilyhorseriding.com/wp-content/uploads/2017/12/300x200.png",
  };

  //phương thức render Img do mình tạo ra
  renderImg() {
    return (
      <div>
        <img
          src="https://sicilyhorseriding.com/wp-content/uploads/2017/12/300x200.png"
          alt="123"
        />
      </div>
    );
  }

  //Phương thức render của react Component
  render() {
    let title = "hello FE41";
    return (
      <div>
        <div className="container">
          <div className="card text-left">
            <img className="card-img-top" src={this.hocVien.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{this.hocVien.hoTen}</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>
        <h1>{title}</h1>
        <input value={title} />
        {/* binding phuong thuc */}
        {this.renderImg()}
      </div>
    );
  }
}
