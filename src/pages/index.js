import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import Hero from '../components/Hero';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        {posts.map(post => (
          <PostPreview post={post} key={post.slug} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
