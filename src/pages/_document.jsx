import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto&Roboto+Mono:wght@300&family=Roboto+Slab:wght@600&display=swap' />
          <link rel='stylesheet' href='/css/comun.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
