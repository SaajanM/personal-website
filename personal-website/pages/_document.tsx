import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://latex.now.sh/prism/prism.css" />
        <Script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"></Script>
      </Head>
      <body className="latex-dark-auto">
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </Html>
  );
}