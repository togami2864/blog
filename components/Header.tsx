import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link href="/" passHref>
        <HeaderTitle>migatodev</HeaderTitle>
      </Link>
      {/* <Link href="/profile">Profile</Link> */}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

const HeaderTitle = styled.a`
  color: white;
  font-family: ${(props) => props.theme.fontTitle};
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeightBold};
`;
