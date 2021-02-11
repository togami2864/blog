import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import media from "styled-media-query";
// const ReactGitHubCalendar = dynamic(() => import("react-ts-github-calendar"), {
//   ssr: false,
// });
const ReactGitHubCalendar = dynamic(() => import("react-ts-github-calendar"), {
  ssr: false,
});
export const GithubGraph = () => {
  return (
    <Calender>
      <ReactGitHubCalendar userName="togami2864" tooltips responsive />
    </Calender>
  );
};

const Calender = styled.div`
  span {
    color: white !important;
  }
  .contrib-footer {
    padding: 30px 0 !important;
  }
  ${media.lessThan("medium")`
    .calendar-graph {
      height: calc((42/414)*100vw);
    }
  `}
`;
