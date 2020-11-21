import { LayoutStyle } from "../assets/js/styles/layout";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
}
