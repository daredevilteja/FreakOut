import React, { Component } from "react";
import "./styles.css";
import Login from "../Login";
import AfterLogin from "../AfterLogin";

export default function Main(props) {
  return (
    <div className="main">{props.change ? <Login /> : <AfterLogin />}</div>
  );
}
