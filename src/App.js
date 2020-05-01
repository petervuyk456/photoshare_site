import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./pages/AboutMe";

function RouteConfig(props) {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Jumbotron />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/photo-album">
            <PhotoAlbum pictures={props.props.pictures} />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export class App extends Component {
  state = {
    pictures: [],
  };

  constructor() {
    super();
    this.state.pictures = PICTURES;
  }

  render() {
    return <RouteConfig props={this.state} />;
  }
}

const PICTURES = [
  { id: 0, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 1, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 2, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 3, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 4, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 5, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 6, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 7, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 8, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 9, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 10, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 11, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 12, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 13, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 14, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 15, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 16, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 17, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 18, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 19, title: "Hot girl", src: "./dist/images/hot_girl.png" },
  { id: 20, title: "Hot girl", src: "./dist/images/hot_girl.png" },
];

export default App;
