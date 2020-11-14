import { LayoutStyle } from "../assets/js/styles/layout";
import { Header } from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
}
