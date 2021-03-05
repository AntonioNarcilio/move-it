/* eslint-disable react/jsx-props-no-spreading */
import Document from 'next/document';

import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <link rel="icon" type="image/png" href="favicon.png" />

//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
