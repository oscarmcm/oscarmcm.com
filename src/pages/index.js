import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Profile from '../pp.jpg';

import "../css/index.css";
import "../css/wing.css";

export default class Index extends React.Component {

  showAbout() {
    let home = document.querySelector('.home-section');
    let about = document.querySelector('.about-section');
    let garden = document.querySelector('#container');
    let moon = document.querySelector('.moon');
    home.classList.add('hide');
    garden.classList.add('hide');
    moon.classList.add('hide');
    about.classList.remove('hide');
  }

  hideAbout() {
    let home = document.querySelector('.home-section');
    let about = document.querySelector('.about-section');
    let garden = document.querySelector('#container');
    let moon = document.querySelector('.moon');
    home.classList.remove('hide');
    garden.classList.remove('hide');
    moon.classList.remove('hide');
    about.classList.add('hide');
  }

  render() {
    return (
      <div className="full-screen" style={{display: 'table'}}>
        <div className="home-section">
          <div className="center">
            <a href="#" onClick={this.showAbout} className="container-profile">
              <img src={Profile} id="profile" alt="Oscar Cortez" />
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
        <div className="about-section hide">
          <div className="row full-screen no-margin">
            <div className="col-5 container-post">
              <a href="#" onClick={this.hideAbout} className="close">X</a>
              <div className="cards">
                <div className="card">
                  <h5 className="card-header">Header</h5>
                  <p className="card-body">Content</p>
                  <div className="card-footer center text-center"><p>Footer</p></div>
                </div>
                <div className="card">
                  <h5 className="card-header">Header</h5>
                  <p className="card-body">Content</p>
                  <div className="card-footer center text-center"><p>Footer</p></div>
                </div>
                <div className="card">
                  <h5 className="card-header">Header</h5>
                  <p className="card-body">Content</p>
                  <div className="card-footer center text-center"><p>Footer</p></div>
                </div>
                <div className="card">
                  <h5 className="card-header">Header</h5>
                  <p className="card-body">Content</p>
                  <div className="card-footer center text-center"><p>Footer</p></div>
                </div>
              </div>
              <button className="outline-reversed center">Talk with me</button>
            </div>
            <div className="col-7 container-bio no-margin">
              <h1>BOOM</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
