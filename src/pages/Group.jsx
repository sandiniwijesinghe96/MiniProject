import React, { Component } from "react";
import "/home/sandiniw/Documents/Mini project/mini-app/src/App.css";

export default class group extends Component {
  render() {
    return (
      <div>
        <p></p>
        <h1 style={{ textAlign: "center" }}>Trending Categories</h1>

        <div class="group-container">
          <div class="group">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
                style={{
                  width: "500px",
                  height: "350px",
                  margin: "1em",
                  resizeMode: "cover",
                  justifyItems: "center",
                }}
              />
              <div className="pic">
                <p>Vegetable 1</p>
                <p>price: $6</p>
                <p>Category:Cat1</p>
              </div>
            </div>
          </div>

          <div class="group">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
                style={{
                  width: "500px",
                  height: "350px",
                  margin: "1em",
                  resizeMode: "cover",
                  justifyItems: "center",
                }}
              />
              <div className="pic">
                <p>Vegetable 1</p>
                <p>price: $6</p>
                <p>Category:Cat1</p>
              </div>
            </div>
          </div>
          <div class="group">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
                style={{
                  width: "500px",
                  height: "350px",
                  margin: "1em",
                  resizeMode: "cover",
                  justifyItems: "center",
                }}
              />
              <div className="pic">
                <p>Vegetable 1</p>
                <p>price: $6</p>
                <p>Category:Cat1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
