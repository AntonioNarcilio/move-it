/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';
import dracula from '../styles/themes/dracula';
import GlocalStyles from '../styles/global';
import { SelectPageProvider } from '../contexts/SelectPageButtonContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dracula}>

      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <GlocalStyles />

      <SelectPageProvider>
        <Component {...pageProps} />
      </SelectPageProvider>

    </ThemeProvider>
  );
}

export default MyApp;
