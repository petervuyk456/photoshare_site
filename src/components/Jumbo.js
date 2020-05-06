import React, { Component } from "react";

export class Jumbo extends Component {
  render() {
    return (
      <div class="jumbotron text-center">
        <img
          src="./dist/images/lambo_aventador.jpg"
          alt="lambo"
          height="auto"
          width="30%"
        ></img>
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4"></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default Jumbo;
