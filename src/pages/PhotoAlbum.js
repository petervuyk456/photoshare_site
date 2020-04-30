import React, { Component } from "react";
import Album from "../components/Album";

export class PhotoAlbum extends Component {
  state = {
    numCards: 10,
    cardsPerRow: 3,
  };

  render() {
    return (
      <Album
        numCards={this.state.numCards}
        cardsPerRow={this.state.cardsPerRow}
      />
    );
  }
}

export default PhotoAlbum;
