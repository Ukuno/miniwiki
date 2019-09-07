import React, { Component } from "react";
import button from "react-bootstrap/Button";

export default class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
