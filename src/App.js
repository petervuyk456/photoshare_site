import React, { Component, Fragment } from "react";
import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <PhotoAlbum pictures={PICTURES} />
      </Fragment>
    );
  }
}

const PICTURES = [
  { id: 0, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 1, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 2, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 3, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 4, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 5, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 6, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 7, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 8, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 9, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 10, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 11, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 12, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 13, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 14, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 15, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 16, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 17, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 18, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 19, title: "Hot girl", src: "./public/images/hot_girl.png" },
  { id: 20, title: "Hot girl", src: "./public/images/hot_girl.png" },
];

export default App;
