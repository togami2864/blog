import styled from "styled-components";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Link href="/" passHref>
        <ToHome>Back To Home</ToHome>
      </Link>
    </footer>
  );
};

const ToHome = styled.a`
  color: white;
  font-family: ${(props) => props.theme.fontTitle};
  font-size: 24px;
  &:before {
    content: "<";
  }
`;
