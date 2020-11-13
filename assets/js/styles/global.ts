import { createGlobalStyle } from "styled-components";
import { reboot } from "styled-reboot";

export const GlobalStyle = createGlobalStyle`
  ${reboot}
  body {
    color: ${(props) => props.theme.color.main};
    background-color: ${(props) => props.theme.background.dark};
    font-size: 14px;
    font-family:${(props) => props.theme.fontPrimary};
  }

  ol, ul, dl {
    list-style: none;
    padding: 0;
  }
`;
