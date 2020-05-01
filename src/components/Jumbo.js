import React, { Component } from "react";

// Adds jumbotron to home page
export class Jumbo extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <img
          src="./dist/images/lambo_aventador.jpg"
          alt="lambo"
          height="auto"
          width="30%"
        ></img>
      </div>
    );
  }
}

export default Jumbo;
