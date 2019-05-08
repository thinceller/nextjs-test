import Link from 'next/link';

import App from '../components/App';

export default () => (
  <App>
    <h2>About page</h2>
    <Link prefetch href="/">
      <a>top page</a>
    </Link>
  </App>
);
