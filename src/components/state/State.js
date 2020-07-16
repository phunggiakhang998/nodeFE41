import React, { Component } from "react";

export default class State extends Component {
  //Nếu như isLogin = true là người đã đăng nhập => Hiển thị thông tin chào username
  //Ngược lại isLogin = false là ng dùng chưa đăng nhập hiên thị nút đăng nhập
  username = "Khang";
  //State là 1 thuộc tính của components => khi state thay đổi giá trị giao diện render lại
  //Lưu ý: các giá trị làm thay đổi giao diện thì đặt trong state
  state = {
    isLogin: false,
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return <a className="nav-link">Hello {this.username}</a>;
    }
    return (
      <button
        className="nav-link bg-dark"
        onClick={() => {
          this.login();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  login = () => {
    //this.state.isLogin = true; không được gán giá trị cho thuộc tính state trực tiếp
    //this.setState(newState): phương thưucs của component thay đổi giá trị state hiện tại va render lại giao diện
    this.setState({
      isLogin: true,
    });
    console.log(this.state.isLogin);
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <a className="navbar-brand" href="#">
            CyberSoft
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                {this.renderLogin()}
                {/* {this.isLogin ? (
                  <a className="nav-link">Hello {this.username}</a>
                ) : (
                  <button className="nav-link bg-dark">Đăng nhập</button>
                )} */}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
