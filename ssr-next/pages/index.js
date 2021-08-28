import fetch from 'isomorphic-fetch';
import React from 'react';
import Link from 'next/link';

const Home = ({repositories}) => (
  <>
    <Link href='blog'>
      <a>Blog</a>
    </Link>
    {repositories.map(e => (
      <h1 key={e.id}>{e.name}</h1>
    ))}
  </>
);

Home.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/orgs/rocketseat/repos');
  const repositories = await res.json();

   return {repositories};
}

export default Home;