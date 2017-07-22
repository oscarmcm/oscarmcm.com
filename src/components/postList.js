import React from "react";

export default class PostList extends React.Component {
  render() {
    return (
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
    )
  }
}
