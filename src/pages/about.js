import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About</h1>
    <p>I am a UI Engineer who also backpacks from time to time.</p>
    <Link to="/">&larr; Home</Link>
  </Layout>
);
