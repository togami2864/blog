import { useEffect, useRef } from "react";
import styled from "styled-components";
import GithubCalender from "github-calendar";
export const GithubGraph = () => {
  const ref = useRef(null);
  useEffect(() => {
    GithubCalender(ref.current, "togami2864", {
      responsive: true,
      tooltips: true,
      cache: 30 * 24,
    });
  });
  return (
    <Calender>
      <div className="calender" ref={ref}>
        Loading the data just for you.
      </div>
    </Calender>
  );
};

const Calender = styled.div`
  span {
    color: white !important;
  }
`;
