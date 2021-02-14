/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Router from 'next/router';
import '../components/styles/nprogress.css';
import nProgress from 'nprogress';
import Page from '../components/Page';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
