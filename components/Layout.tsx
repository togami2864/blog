import { LayoutStyle } from "../assets/js/styles/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
}
