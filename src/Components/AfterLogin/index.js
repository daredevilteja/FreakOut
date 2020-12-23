import React, { Component } from "react";
import "./styles.css";

export default class AfterLogin extends Component {
  render() {
    return (
      <div className="container-main">
        <aside>
          <ul>
            <li>Home</li>
            <li>My Posts</li>
            <li>Profile</li>
          </ul>
        </aside>
        <div className="posts"></div>
      </div>
    );
  }
}
