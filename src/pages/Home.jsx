import NavBar from "./NavBar";
import Group from "./Group";
import Grid from "./Grid";
import SlideShow from "./SlideShow";
import PopUp from "./Popup";
import Categories from "./Categories";
import React, { Component } from "react";
import { useState } from "react";

export default class Home extends Component {
  state = {
    textin: "",
    isButtonClic: false,
    seen: false,
  };

  togglePop = (e) => {
    console.log("popup clicked");
    this.setState({ seen: true });
    console.log(this.state.seen);
  };

  updateInput = (e) => {
    this.setState({ textin: e.target.value });
  };

  handleClick = (e) => {
    console.log("button clicked");
    this.setState({ isButtonClic: true });
  };

  handleEnter = () => {
    console.log("Enter is pressed");
  };

  handleSearch = () => {
    //if (this.state.textin.length !==0)
    <h1>Search result for {this.state.textin}</h1>;
  };

  render() {
    return (
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div>
          <NavBar
            oncLick={this.handleClick}
            // onEnter={this.handleEnter}
            onValue={this.updateInput}
          />
        </div>
        <div>
          <h1>
            {this.state.isButtonClic && (
              <p>Search result for {this.state.textin}</p>
            )}
          </h1>
          <SlideShow></SlideShow>
          <Categories
            onclick={this.togglePop}
            onVal={this.state.seen}
          ></Categories>
          <p class="h2" style={{ margin: "1em" }}>
            Frequently Bought:
          </p>
          <Grid />
        </div>
      </div>
    );
  }
}
