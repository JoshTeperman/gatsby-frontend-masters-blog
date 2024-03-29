import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <Image fluid={post.frontmatter.image.sharp.fluid} />
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; Back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;
