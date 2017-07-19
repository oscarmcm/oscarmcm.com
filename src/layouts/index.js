import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../css/main.css";

export default class Template extends React.Component {

  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]} />
        {this.props.children()}
      </div>
    );
  }
}
