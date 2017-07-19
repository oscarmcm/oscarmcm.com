import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Profile from '../pp.jpg';

export default class Index extends React.Component {
  render() {
    return (
      <div className="full-screen">
        <div className="center">
          <img src={Profile} className="Profile" id="profile" alt="Oscar Cortez" />
        </div>
        <div className="center text-center container-name">
          <h1 id="name">
            <span>▲</span> Oscar Cortez
          </h1>
          <h1 id="twitter">
            <span>@</span> oscar_mcm
          </h1>
        </div>
      </div>
    );
  }
}
