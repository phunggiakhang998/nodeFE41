import React, { Component } from "react";
import BTItem from "./BTItem";

export default class BTSmartPhone extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center display-4 text-white font-weight-bold">
          Danh sach san pham
        </h3>
        <div className="row">
          <div className="col-3">
            <BTItem />
          </div>
          <div className="col-3">
            <BTItem />
          </div>
          <div className="col-3">
            <BTItem />
          </div>
          <div className="col-3">
            <BTItem />
          </div>
        </div>
      </div>
    );
  }
}
