import React, { Component } from "react";

export class Jumbo extends Component {
  render() {
    return (
      <div className="jumbotron">
        <img
          src="../public/images/lambo_aventador.jpg"
          alt="lambo"
          height="auto"
          width="100%"
        ></img>
      </div>
    );
  }
}

export default Jumbo;
