import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Menu } from "../components/menu/Menu";

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link href="/" passHref>
        <HeaderTitle>togami2864</HeaderTitle>
      </Link>
      <Menu />
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

const HeaderTitle = styled.a`
  color: white;
  font-family: ${(props) => props.theme.fontTitle};
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeightBold};
  margin-left: 20px;
`;
