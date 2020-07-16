import React, { Component } from "react";

export default class ExState extends Component {
  state = {
    like: 0, //giá trị thay đổi trên giao diện mỗi lần người dùng thao tác sẽ được lưu trong state
  };
  like = () => {
    let likeNumber = this.state.like + 1;
    this.setState({
      like: likeNumber,
    });
  };

  render() {
    return (
      <div>
        <div classname="container">
          <h3 className="display-4">Profile Lê Thị A</h3>
          <div
            className="card text-white bg-dark"
            style={{ width: 300, height: 400 }}
          >
            <img
              className="card-img-top"
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-0/p640x640/84208707_277531556947726_5519324981596520448_o.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=EBENEPl8m4kAX8WZAM0&_nc_ht=scontent-sin6-1.xx&_nc_tp=6&oh=f3fc417b77b283385fa24ffb8bf05413&oe=5F16F436"
              alt="img"
              style={{ width: 300, height: 250 }}
            />
            <div className="card-body">
              <h4 className="card-title">
                Họ tên: Lê Thị A ({this.state.like}{" "}
                <i className="fa fa-heart"></i>)
              </h4>
              <p className="card-text">Tuổi: 19</p>
            </div>
          </div>
          <div className="card text-white dg-default">
            <div className="card-body text-dark">
              <h4 className="card-title">
                Lượt thích ({this.state.like} <i className="fa fa-heart"></i>)
              </h4>
              <button
                onClick={() => {
                  this.like();
                }}
                className="btn btn-default"
                style={{ color: "red", border: "1px solid red" }}
              >
                Thả tim <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
