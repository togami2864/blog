import styled from "styled-components";
export const Skills = () => {
  return (
    <SkillsStyle>
      <h1>Skills</h1>
      <Sub>Proficient With</Sub>
      <p>
        <Strong>Language:</Strong> JavaScript/TypeScript
      </p>
      <p>
        <Strong>Tools:</Strong> Node.js, React.js, Next.js, Webpack
      </p>
      <Sub>Have used before</Sub>
      <p>
        <Strong>Language:</Strong> Go Python C HTML/CSS(Sass)
      </p>
      <p>
        <Strong>Tools:</Strong> AWS Amplify(AppSync, DynamoDB, Cognito),
        CloudFront, S3, Lambda/Lambda@Edge, SES
      </p>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.div`
  padding-top: 20px;
  border-top: 1px solid white;
  text-align: left;
`;

const Strong = styled.strong`
  font-size: 18px;
  font-weight: 800;
`;

const Sub = styled.h2`
  margin: 20px 0 10px 0;
  color: greenyellow;
`;
