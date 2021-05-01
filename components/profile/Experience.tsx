import styled from "styled-components";
export const Experience = () => {
  return (
    <ExpStyle>
      <h1>Experience</h1>
      <h2>・snaq.me,Inc (July 2020 ~)</h2>
      <p> FrontEnd : HTML/CSS/React/TypeScript/AWS</p>
      <h2>・Wanteldy,Inc (March 2021 ~)</h2>
      <p> FrontEnd : React/TypeScript</p>
      <h2>・CyberAgent,Inc (March 2021 ~)</h2>
      <p>2 days hackathon</p>
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
