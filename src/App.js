import React, { Component, Fragment } from "react";
import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Jumbotron />
        <PhotoAlbum />
      </Fragment>
    );
  }
}

export default App;
