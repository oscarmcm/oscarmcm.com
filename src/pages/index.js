import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Profile from '../pp.jpg';

import "../css/index.css";

export default class Index extends React.Component {
  render() {
    return (
      <div className="full-screen" style={{display: 'table'}}>
        <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
          <div className="center">
            <img src={Profile} id="profile" alt="Oscar Cortez" />
          </div>
          <div className="center text-center container-name">
            <h1 id="name">
              <span>▲</span> Oscar Cortez
            </h1>
            <h1 id="twitter">
              <a href="https://twitter.com/oscar_mcm" target="_blank">@ oscar_mcm</a>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
