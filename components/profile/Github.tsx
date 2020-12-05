import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ReactGitHubCalendar = dynamic(() => import("react-ts-github-calendar"), {
  ssr: false,
});
export const GithubGraph = () => {
  return (
    <Calender>
      <ReactGitHubCalendar userName="togami2864" tooltips />
    </Calender>
  );
};

const Calender = styled.div`
  span {
    color: white !important;
  }
`;
