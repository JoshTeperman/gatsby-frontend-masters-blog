import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Link to="/about">Learn About Me &rarr;</Link>
      {posts.map(post => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  );
};
