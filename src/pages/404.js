import React from "react";
import Link from "gatsby-link";

import "../css/404.css";

export default () =>
  <div className="full-screen" style={{display: 'table'}}>
    <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
      <div className="glitch_word_box">
        <div className="line"></div>
        <h1 id="word" className="glitch_word0">
          404 - Page not found
        </h1>
        <h1 id="word1" className="glitch_word1">
          404 - Page not found
        </h1>
        <h1 id="word2" className="glitch_word2">
          404 - Page not found
        </h1>
      </div>
      <div className="glitch_word_box">
        <h1 id="word" className="glitch_word0">
          Back to <span className="back_to_home link_effect"><Link to="/">Home</Link></span>
        </h1>
        <h1 id="word1" className="glitch_word1">
          Back to <span className="back_to_home link_effect"><Link to="/">Home</Link></span>
        </h1>
        <h1 id="word2" className="glitch_word2">
          Back to <span className="back_to_home link_effect"><Link to="/">Home</Link></span>
        </h1>
      </div>
      <h2 className="text-center emoji-cry">☝️😭</h2>
    </div>
  </div>;
