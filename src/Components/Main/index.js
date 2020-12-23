import React, { Component } from "react";
import "./styles.css";
import Login from "../Login";
import AfterLogin from "../AfterLogin";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        {this.props.change ? <Login /> : <AfterLogin />}
      </div>
    );
  }
}
