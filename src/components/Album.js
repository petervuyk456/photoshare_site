import React, { Component } from "react";
import hottie from "../../public/images/hot_girl.png";

function PhotoCard() {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className="card-body">
          <div class="text-center">
            <img src={hottie} class="rounded" alt="hot girl"></img>
          </div>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function Album(props) {
  const { numCards, cardsPerRow } = props;
  let numRows = Math.ceil(numCards / cardsPerRow);
  let cards = [];

  if (numCards === 0) return <p>No photos have been added to the album.</p>;

  for (let i = 1; i <= numRows; i++) {
    cards.push(
      <div className="row">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        {/* {(() => {
          if (i * numRows > numCards) {
            Array(numCards % numRows).map(() => <PhotoCard />);
          } else {
            Array(cardsPerRow).map(() => <PhotoCard />);
          }
        })()} */}
      </div>
    );
  }

  let album = [];
  return (
    <div className="album py-5 bg-light">
      <div className="container">{cards}</div>
    </div>
  );
}

export default Album;
