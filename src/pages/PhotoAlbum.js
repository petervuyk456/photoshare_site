import React, { Component, Fragment } from "react";

import Album from "../components/Album";
import splitBy from "../../scripts/splitBy";

export class PhotoAlbum extends Component {
  state = {
    cardsPerRow: 3,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let album;
    if (this.props.pictures.length === 0) {
      album = <p1>There are no pictures in the photo album</p1>;
    } else {
      album = (
        <Album
          pictures={splitBy(this.state.cardsPerRow, this.props.pictures)}
        />
      );
    }

    return (
      <Fragment>
        <h1 className="display-6 text-center">
          Photo Album
          <span className="badge badge-pill badge-dark">
            {this.state.numCards}
          </span>
        </h1>
        {album}
      </Fragment>
    );
  }
}

export default PhotoAlbum;
