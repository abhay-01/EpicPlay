import { Html, Main, NextScript, Head } from 'next/document';
import React from 'react';

const document = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <div id="portal"></div>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default document;