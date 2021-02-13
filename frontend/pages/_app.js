import Router from 'next/router';
import NProgrss from 'nprogress';
import '../components/styles/nprogress.css';

import Page from '../components/Page';

Router.events.on('routeChangeStart', () => NProgrss.start());
Router.events.on('routeChangeComplete', () => NProgrss.done());
Router.events.on('routeChangeError', () => NProgrss.done());

const MyApp = ({ Component, pageProps }) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
