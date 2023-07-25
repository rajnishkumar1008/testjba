
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
}

  render() {
    return (
      <Html lang='en-UA'>
        <Head>
        <title>Loose Diamond Supplier, Manufacturer & Exporter from India | JBA</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument