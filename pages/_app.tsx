/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import '../styles/Home.module.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={}>
    <Component {...pageProps} />
    // </Provider>
  );
};

export default App;
