import React, { Component } from "react";

export default class ExState2 extends Component {
  state = {
    img: "./img/CarBasic/products/black-car.jpg",
  };

  changImg = (img) => {
    let images = `./img/CarBasic/products/${img}-car.jpg`;
    this.setState({
      img: images,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={this.state.img} alt="123" style={{ width: "100%" }} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changImg("red");
                  }}
                  className="btn"
                  style={{ background: "red", color: "white" }}
                >
                  Red Color
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changImg("silver");
                  }}
                  className="btn"
                  style={{ background: "silver" }}
                >
                  Silver Color
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => {
                    this.changImg("black");
                  }}
                  className="btn"
                  style={{ background: "black", color: "white" }}
                >
                  Black Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
