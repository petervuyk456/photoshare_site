import React, { Fragment, useState } from "react";

import Album from "../components/Album";
import splitBy from "../../scripts/splitBy";

export function PhotoAlbum(props) {
  const [rowCount, setRowCount] = useState(3);
  const [cards, setCards] = useState(props.pictures);

  let album = <p1>No pictures in gallery.</p1>;

  if (cards.length > 0) {
    album = <Album pictures={splitBy(rowCount, props.pictures)} />;
  }

  return (
    <Fragment>
      <h1 className="display-6 text-center">
        Photo Album
        <span className="badge badge-pill badge-dark">{cards.length}</span>
      </h1>
      {album}
    </Fragment>
  );
}

export default PhotoAlbum;
