import React, { Component, Fragment } from "react";
import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <PhotoAlbum />
      </Fragment>
    );
  }
}

export default App;
