import React, { Component, Fragment } from "react";
import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Home />
        <PhotoAlbum />
      </Fragment>
    );
  }
}

export default App;
