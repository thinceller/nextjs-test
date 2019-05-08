import Head from 'next/head';

import Header from './Header';

export default ({ children }) => (
  <main>
    <Head>
      <title>next.js test</title>
    </Head>
    <Header />
    {children}
  </main>
);
