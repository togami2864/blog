import styled from "styled-components";
import { ProfileIcon } from "../components/profile/ProfileIcon";
import { Introduction } from "../components/profile/Introduction";

export default function profile({}) {
  return (
    <Profile>
      <ProfileIcon />
      <Introduction />
    </Profile>
  );
}

const Profile = styled.div`
  margin: 40px;
`;
