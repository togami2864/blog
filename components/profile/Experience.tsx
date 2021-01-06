import styled from "styled-components";
export const Experience = () => {
  return (
    <ExpStyle>
      <h1>Experience</h1>
      <h2>・snaq.me,Inc (July 2020 ~)</h2>
      <p> FrontEnd : HTML/CSS/React/TypeScript/AWS</p>
    </ExpStyle>
  );
};

const ExpStyle = styled.div`
  margin: 80px 0 50px 0;
  padding-top: 20px;
  border-top: 1px solid white;
  text-align: left;
  h2 {
    margin: 0;
  }
`;
