import styled from "styled-components";
export const Interest = () => {
  return (
    <InterestStyle>
      <h1>Interest</h1>
      <Content>
        I study an Electric Circuit and a Semiconductor Engineering at an
        university.But, I also study about web programming and a computer, and
        work as a frontend engineer. Especially,
        <Strong> performance tuning </Strong> and
        <Strong> ecosystem around JavaScript </Strong>
        arose my curiosity !!
      </Content>
    </InterestStyle>
  );
};

const InterestStyle = styled.div`
  padding-top: 20px;
  border-top: 1px solid white;
  text-align: left;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.2;
`;

const Strong = styled.strong`
  color: greenyellow;
`;
