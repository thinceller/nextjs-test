import Link from 'next/link';

import App from '../components/App';

export default () => (
  <App>
    <h2>index page</h2>
    <Link prefetch href="/about">
      <a>about</a>
    </Link>
  </App>
);
