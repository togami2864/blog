import styled from "styled-components";
import Image from "next/image";

export const ProfileIcon = () => {
  return <Icon src="/profile.jpg" width={200} height={200} />;
};

const Icon = styled(Image)`
  border-radius: 25%;
`;
