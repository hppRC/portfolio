import Document, { Head, Html, Main, NextScript } from 'next/document';

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = 'https://hpprc.dev';

  title = 'Next Template Tailwind';

  description = 'Next.js Template with Tailwind and other configs e.g. eslint, stylelint, and etc.';

  render() {
    return (
      <Html lang="en">
        <Head lang="en-US">
          <meta name="charset" content="UTF-8" />

          <meta name="description" content={this.description} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/images/ogp.png`} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.title} />
          <meta name="twitter:description" content={this.description} />
          <meta name="twitter:image" content={`${this.url}/images/ogp.png`} />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#03045e" />

          <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/images/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" sizes="128x128" href="/images/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/images/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/images/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" sizes="512x512" href="/images/icons/icon-512x512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
