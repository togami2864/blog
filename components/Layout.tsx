import { LayoutStyle } from "../assets/js/styles/layout";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      {/* {home ? <Footer /> : null} */}
    </>
  );
}
