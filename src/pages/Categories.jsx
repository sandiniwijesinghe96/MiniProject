import React, { Component } from "react";
import PopUp from "./Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Categories extends Component {
  render() {
    return (
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        style={{
          padding: "1em",
          margin: "1em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "1em", justifyItems: "center" }}
          onClick={this.props.onclick}
        >
          {this.props.onVal ? <PopUp toggle={this.props.togglePop} /> : null}|
          Meat
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "1em" }}
        >
          Vegatables
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "1em" }}
        >
          Fruits
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style={{ margin: "1em" }}
        >
          Dairy
        </button>
      </div>
    );
  }
}
