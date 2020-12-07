import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/js/styles/theme";
import { GlobalStyle } from "../assets/js/styles/global";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Menu } from "../components/menu/Menu";
import * as gtag from "../lib/gtag";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
