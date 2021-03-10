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
        <title>Move.it</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="title" content="Move.it" key="title" />
        <meta name="description" content="O Move.it é uma aplicação desenvolvido com o intuito de ajudar aqueles que passam um bom tempo à frente do computador." key="desc" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Move.it" key="ogsitename" />
        <meta property="og:url" content="https://antonionarcilio-move-it.vercel.app" key="ogurl" />
        <meta property="og:title" content="Move.it" key="ogtitle" />
        <meta property="og:description" content="O Move.it é uma aplicação desenvolvido com o intuito de ajudar aqueles que passam um bom tempo à frente do computador." key="ogdesc" />
        <meta property="og:image" content="https://i.imgur.com/TNJ7eqWl.png" key="ogimg" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" key="tw" />
        <meta property="twitter:url" content="https://antonionarcilio-move-it.vercel.app" key="twurl" />
        <meta property="twitter:title" content="Move.it" key="twtitle" />
        <meta property="twitter:description" content="O Move.it é uma aplicação desenvolvido com o intuito de ajudar aqueles que passam um bom tempo à frente do computador." key="twdesc" />
        <meta property="twitter:image" content="https://i.imgur.com/TNJ7eqWl.png" key="twimg" />

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
