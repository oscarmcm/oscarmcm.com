import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default class Template extends React.Component {

  static propTypes = {
    children: PropTypes.func
  };

  toggleNightMode() {
    let bodyClass = document.body.classList;
    if (bodyClass.contains('nightmode')) {
      bodyClass.remove('nightmode')
    } else {
      bodyClass.add('nightmode');
    }
  }

  render() {
    let location = this.props.location;
    return (
      <div>
        <Helmet
          title="Oscar Cortez | oscarmcm.com"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "Developer, Personal" }
          ]} />
        <svg
          onClick={location.pathname === "/" ? null : this.toggleNightMode}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100" xmlSpace="preserve" className="moon">
            <path d="M86.576,84.239c-0.102-0.44-0.448-0.781-0.889-0.876c-1.441-0.311-2.879-0.689-4.271-1.127  C66.969,77.707,55.8,66.938,50.77,52.692C45.739,38.445,47.67,23.05,56.07,10.454c0.812-1.218,1.692-2.415,2.617-3.559  c0.284-0.351,0.339-0.834,0.143-1.24C58.632,5.25,58.219,4.994,57.768,5c-4.879,0.064-9.708,0.928-14.354,2.568  c-23.396,8.261-35.71,34.016-27.449,57.412c8.261,23.397,34.017,35.711,57.414,27.45c4.645-1.64,8.945-3.999,12.783-7.014  C86.516,85.138,86.678,84.679,86.576,84.239z"></path>
        </svg>
        {this.props.children()}
      </div>
    );
  }
}
