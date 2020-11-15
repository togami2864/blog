import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lists>
        <Link href="/">
          <a>
            <Title>Create-react-appなしでCreate-react-appぽい環境を作る</Title>
            <Date>2020-10-11</Date>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Title>Create-react-appなしでCreate-react-appぽい環境を作る</Title>
            <Date>2020-10-11</Date>
          </a>
        </Link>
      </Lists>
    </div>
  );
}

const Lists = styled.main`
  margin: 40px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.main};
`;

const Date = styled.p`
  color: ${(props) => props.theme.color.main};
  font-size: 20px;
`;
