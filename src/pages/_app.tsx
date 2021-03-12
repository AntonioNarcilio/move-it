/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import Head from 'next/head';
import Router from 'next/router'; // progress bar
import NProgress from 'nprogress'; // progress bar
import usePersistedState from '../utils/usePersistedState'; // theme selected

import dracula from '../styles/themes/dracula';
import nlw from '../styles/themes/nlw';

import GlocalStyles from '../styles/global';

import { SelectPageProvider } from '../contexts/SelectPageButtonContext'; // sideBar
import { SideBar } from '../components/SideBar';

import 'nprogress/nprogress.css'; // estilos padrão
import '../styles/nprogressbar.css'; // customizado

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 300,
  showSpinner: false,
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dracula);

  const toggleTheme = () => {
    setTheme(theme.title === 'dracula' ? nlw : dracula);
  };

  const overlayScrollBarTheme = () => {
    let scrollbarTheme = '';
    if (theme.title === 'dracula') {
      scrollbarTheme = 'os-theme-light';
    } else {
      scrollbarTheme = 'os-theme-dark';
    }
    return scrollbarTheme;
  };

  return (

    <ThemeProvider theme={theme}>

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

      <OverlayScrollbarsComponent
        className={overlayScrollBarTheme()}
        options={{
          scrollbars: {
            visibility: 'auto',
            autoHide: 'move',
            autoHideDelay: 800,
            dragScrolling: true,
            clickScrolling: false,
            touchSupport: true,
            snapHandle: false,
          },
        }}
      >

        <SelectPageProvider>

          <SideBar toggleTheme={toggleTheme} />
          <Component {...pageProps} />

        </SelectPageProvider>

      </OverlayScrollbarsComponent>

    </ThemeProvider>

  );
}

export default MyApp;
