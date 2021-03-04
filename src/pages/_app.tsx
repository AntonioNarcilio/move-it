/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'styled-components';

import dracula from '../styles/themes/dracula';
import GlocalStyles from '../styles/global';
import { SelectPageProvider } from '../contexts/SelectPageButtonContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dracula}>
      <GlocalStyles />
      <SelectPageProvider>
        <Component {...pageProps} />
      </SelectPageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
