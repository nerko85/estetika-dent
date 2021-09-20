import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Layout from "../components/Layout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, mainTheme, darkTheme } from "../styles/Theme.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
