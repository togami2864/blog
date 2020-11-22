import Head from "next/head";
import styled from "styled-components";
import { ProfileIcon } from "../components/profile/ProfileIcon";
import { Introduction } from "../components/profile/Introduction";
import { GithubGraph } from "../components/profile/Github";

export default function profile({}) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
        />
      </Head>
      <Profile>
        <ProfileIcon />
        <Introduction />
        <GithubGraph />
      </Profile>
    </>
  );
}

const Profile = styled.div`
  margin: 40px;
`;
