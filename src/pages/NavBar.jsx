import "/home/sandiniw/Documents/Mini project/mini-app/src/App.css";

import React, { Component } from "react";

export default class NavBar extends Component {
  // handleClick= () =>{
  //   console.log('button clicked')

  // };

  // handleEnter= () => {
  //   console.log('Enter is pressed')
  // };

  render() {
    return (
      // <div className="container-fluid">
      //   <p class="brand">Sysco | Shop</p>
      //   <div
      //     className="input"
      //     // onKeyDown={this.props.onEnter}
      //   >
      //     <input
      //       type="text"
      //       onChange={this.props.onValue}
      //       value={this.props.textin}
      //     />
      //     <button
      //       class="btn btn-outline-success"
      //       onClick={this.props.oncLick}
      //       type="submit"
      //     >
      //       Search
      //     </button>
      //   </div>
      // </div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Sysco | Shop</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              onChange={this.props.onValue}
              value={this.props.textin}
            />
            <button
              class="btn btn-outline-success"
              onClick={this.props.oncLick}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
