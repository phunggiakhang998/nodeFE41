import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "Sony Xperia", price: 1000 },
    { id: 2, name: "Iphone", price: 2000 },
    { id: 3, name: "Samsung Galaxy Note 10+", price: 3000 },
  ];

  renderProduct = () => {
    //cách 1:
    // let contentJSX = [];
    // for (let i = 0; i < this.products.length; i++) {
    //   let product = this.products[i];
    //   let tagTrJSX = (
    //     <tr>
    //       td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //     </tr>
    //   );
    //   //push tagTrJSX vào contentJSX
    //   contentJSX.push(tagTrJSX);
    // }

    //cách 2:
    let contentJSX = this.products.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });

    //tra về 1 mngar jsx => hàm render sẽ render mảng này
    return contentJSX;
  };
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>nam</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
