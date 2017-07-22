import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import ChatBot from 'react-simple-chatbot';

import PostList from '../components/PostList';

import Profile from '../pp.jpg';

import "../css/index.css";
import "../css/wing.css";

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showChat: false
    };
  }

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

  showChat() {
    this.setState({
      showChat: true
    })
  }

  render() {
    const steps = [
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
    ];

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
              {
                this.state.showChat
                ?
                  <ChatBot
                    hideHeader={true}
                    className={'container-chat'}
                    style={{borderRadius: 0, height: 'inherit'}}
                    contentStyle={{height: 'inherit'}}
                    submitButtonStyle={{margin: 0}}
                    steps={steps}
                    botAvatar={Profile} />
                :
                  <div>
                    <PostList />
                    <button className="outline-reversed center" onClick={this.showChat.bind(this)}>
                      Let's Talk Something
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px"
                        height="100px" viewBox="0 0 250 250" enableBackground="new 0 0 250 250" xmlSpace="preserve">
                        <path fill="#FFFFFF" d="M172.053,157.967c0,4.621-3.781,8.401-8.401,8.401H86.363c-4.621,0-8.401-3.78-8.401-8.401v-57.125
                        c0-4.621,3.78-8.401,8.401-8.401h77.288c4.62,0,8.401,3.78,8.401,8.401V157.967z M163.651,99.161H86.363
                        c-0.893,0-1.68,0.788-1.68,1.68c0,5.986,2.993,11.184,7.718,14.912c7.036,5.513,14.071,11.079,21.055,16.645
                        c2.783,2.258,7.823,7.088,11.499,7.088h0.053h0.052c3.676,0,8.716-4.83,11.499-7.088c6.983-5.565,14.019-11.131,21.055-16.645
                        c3.413-2.678,7.719-8.506,7.719-12.969C165.332,101.471,165.646,99.161,163.651,99.161z M165.332,117.643
                        c-1.104,1.26-2.311,2.415-3.623,3.465c-7.509,5.775-15.069,11.656-22.367,17.747c-3.938,3.308-8.821,7.351-14.282,7.351h-0.052
                        h-0.053c-5.461,0-10.344-4.043-14.282-7.351c-7.298-6.091-14.859-11.972-22.367-17.747c-1.313-1.05-2.521-2.205-3.623-3.465
                        v40.324c0,0.894,0.788,1.681,1.68,1.681h77.288c0.893,0,1.681-0.787,1.681-1.681V117.643z"/>
                      </svg>
                    </button>
                  </div>
              }
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
