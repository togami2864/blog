// import Head from "next/head";
import styled from "styled-components";
import { ProfileIcon } from "../components/profile/ProfileIcon";
import { Introduction } from "../components/profile/Introduction";
import { SNS } from "../components/profile/SNS";
import { GithubGraph } from "../components/profile/Github";
import { Experience } from "../components/profile/Experience";
import { Skills } from "../components/profile/Skills";
import { Interest } from "../components/profile/Interest";

export default function profile() {
  return (
    <Profile>
      <ProfileIcon />
      <Introduction />
      <SNS />
      <GithubGraph />
      <Experience />
      <Skills />
      <Interest />
    </Profile>
  );
}

const Profile = styled.div`
  margin: 40px;
`;
