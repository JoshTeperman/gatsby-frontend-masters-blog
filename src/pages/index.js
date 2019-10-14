import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Welcome to my website!</p>
    <Link to="/about">Learn About Me &rarr;</Link>
  </Layout>
);
