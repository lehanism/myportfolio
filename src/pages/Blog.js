import React from "react";

import Link from 'gatsby-link';

const PostLink = props =>
    <div key={props.post.id}>
        <h1>
            <Link to={props.post.frontmatter.path}>{props.post.frontmatter.title}</Link>
        </h1>
        <h2>{props.post.frontmatter.date}</h2>
        <p>{props.post.excerpt}</p>
    </div>

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return <div className='page'>{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;