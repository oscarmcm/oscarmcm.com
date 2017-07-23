import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import PostList from '../components/PostList';

export default class Blog extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;

    return (
      <div>
        <h1>Blog</h1>
        <PostList posts={posts} detail={true}/>
        <Link to="/" className="outline center">Go back to the homepage</Link>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            description
            tag
          }
        }
      }
    }
  }
`;
