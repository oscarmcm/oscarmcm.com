import React from "react";

import ProfileImg from '../pp.jpg';

export default class PostList extends React.Component {
  render() {
    return (
      <div className="home-section">
        <div className="center">
          <a href="#" onClick={this.props.onClick} className="container-profile">
            <img src={ProfileImg} id="profile" alt="Oscar Cortez" />
          </a>
        </div>
        <div className="center text-center container-name">
          <h1 id="name">
            <span>▲</span> Oscar Cortez
          </h1>
          <h1 id="twitter" className="link_effect">
            <a href="https://twitter.com/oscar_mcm" target="_blank">@ oscar_mcm</a>
          </h1>
        </div>
      </div>
    )
  }
}
