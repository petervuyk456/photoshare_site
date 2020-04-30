import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <div className="text-center">
              <img
                src={this.props.photo.src}
                className="rounded"
                alt="hot girl"
              ></img>
            </div>
            <p className="card-text">Picture description goes here.</p>
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
}

export class CardRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.pictures.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    );
  }
}

function Album(props) {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {props.pictures.map((row, index) => (
          <CardRow key={index} pictures={row} />
        ))}
      </div>
    </div>
  );
}

export default Album;
