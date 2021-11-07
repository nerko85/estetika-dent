import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Head from "next/head";
import Layout from "../components/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, mainTheme, darkTheme } from "../styles/Theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estetika Dent - Improve your smile</title>
        <meta name="description" content="We take care of your smile" />
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MSQJQPR');`}}></script>

      </Head>
      <ThemeProvider theme={mainTheme}>
        <Layout>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSQJQPR"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
