import React, { Component } from "react";

export default class Grid extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-4 g-4" style={{ margin: "1em" }}>
        <div class="col">
          <div class="card">
            <img
              src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
              class="card-img-top"
              alt="veg1"
            />
            <div class="card-body">
              <h5 class="card-title">Vegetable 1</h5>
              <p class="card-text">Price : $6 per Kg</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
              class="card-img-top"
              alt="veg2"
            />
            <div class="card-body">
              <h5 class="card-title">Vegetable 2</h5>
              <p class="card-text">Price : $6 per Kg</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
              class="card-img-top"
              alt="veg3"
            />
            <div class="card-body">
              <h5 class="card-title">Vegetable 3</h5>
              <p class="card-text">Price : $6 per Kg</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
              class="card-img-top"
              alt="veg14"
            />
            <div class="card-body">
              <h5 class="card-title">Vegetable 4</h5>
              <p class="card-text">Price : $6 per Kg</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
