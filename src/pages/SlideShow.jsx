import "react-slideshow-image/dist/styles.css";
import "/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg";

import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

const AutoplayExample = () => {
  const autoplay = true;

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  return (
    <div>
      <div>
        <Slide autoplay={autoplay}>
          <div className="each-slide">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/vegetables.jpg")}
                className="each-slide"
                style={{ height: "600px" }}
              />
            </div>
            <p>Vegetables</p>
          </div>
          <div className="each-slide">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/fruits.jpg")}
                className="each-slide"
                style={{ height: "600px" }}
              />
            </div>
            <p>Fruits</p>
          </div>
          <div className="each-slide">
            <div>
              <img
                src={require("/home/sandiniw/Documents/Mini project/mini-app/src/meat.jpg")}
                className="each-slide"
                style={{ height: "600px" }}
              />
            </div>
            <p>Meats</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AutoplayExample;
