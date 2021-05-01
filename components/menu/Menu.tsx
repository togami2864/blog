import styled from "styled-components";
import Link from "next/link";

export const Menu = () => {
  return (
    <HamburgerMenu>
      <li>
        <Link href="/">Blog</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/oss">OSS</Link>
      </li>
    </HamburgerMenu>
  );
};

const HamburgerMenu = styled.ul`
  display: flex;
  margin: 0;
  li {
    font-size: 24px;
    font-family: ${(prop) => prop.theme.fontTitle};
    font-weight: ${(prop) => prop.theme.fontWeightBold};
    margin-right: 20px;
  }
  a:visited {
    color: yellow;
  }
`;
