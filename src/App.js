import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import PhotoAlbum from "./pages/PhotoAlbum";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import PICTURES from "./constants";

function RouteConfig(props) {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/photo-album">
            <PhotoAlbum pictures={props.pictures} />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export function App() {
  const [pictures, setPictures] = useState(PICTURES);
  return <RouteConfig pictures={pictures} />;
}

export default App;
