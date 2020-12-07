import styled from "styled-components";
import { applyPolyfills, defineCustomElements } from "@uit/glitch-image/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

export const ProfileIcon = () => {
  return (
    <Icon>
      <glitch-image src="/profile.jpg" />
    </Icon>
  );
};

const Icon = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
`;
