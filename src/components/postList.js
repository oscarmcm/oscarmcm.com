import React from "react";
import Link from "gatsby-link";

export default class PostList extends React.Component {
  render() {
    return (
      <div className="cards">
        {this.props.posts.map(({ node: post }) => {
          return (
            <div className="card" key={post.id}>
              <h6 className="card-header">▲ {post.frontmatter.date}</h6>
              <div className="card-body">
              {this.props.detail
                ?
                  <Link to={post.frontmatter.path}>
                    <h5><strong>{post.frontmatter.title}</strong></h5>
                    <p>{post.frontmatter.description}</p>
                  </Link>
                :
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
              }
              </div>
              <div className="card-footer center text-center"><p>#{post.frontmatter.tag}</p></div>
            </div>
          )
        })}
      </div>
    )
  }
}
