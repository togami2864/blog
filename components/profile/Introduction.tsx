import data from "./ja.json";

import styled from "styled-components";

export const Introduction = () => {
  return (
    <>
      <Name>{data.name}</Name>
      <Text>{data.description}</Text>
    </>
  );
};

const Name = styled.h2`
  font-size: 40px;
  font-family: ${(props) => props.theme.fontTitle};
  margin: 30px 0;
`;

const Text = styled.div`
  font-size: 20px;
  letter-spacing: 1.15px;
`;
