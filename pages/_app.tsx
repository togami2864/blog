import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/js/styles/theme";
import { GlobalStyle } from "../assets/js/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
