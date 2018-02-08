import React from "react";

import Link from 'gatsby-link';

const PostLink = props =>
    <Link to={props.post.frontmatter.path}>
      <div key={props.post.id} className='blog-panel'>
          <h1 className='blog-h'>{props.post.frontmatter.title}</h1>
          <h2 className='blog-date'>{props.post.frontmatter.date}</h2>
          <p className='blog-ex'>{props.post.excerpt}</p>
      </div>
    </Link>

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return <div className='page'><h1 className='moremargin'><span className='red'>Blog</span> (Scribblings)</h1><div>{Posts}</div></div>;
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