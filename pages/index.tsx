import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { GetStaticProps } from "next";

import { allPostsData } from "../assets/js/types/postData";
import { getAllPosts } from "../assets/js/helpers/getAllPosts";
import { sanitizeDate } from "../assets/js/helpers/sanitizeDate";

export default function Home({ allPostsData }: { allPostsData: allPostsData }) {
  console.log(sanitizeDate(allPostsData));
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllPosts();
  return {
    props: {
      allPostsData,
    },
  };
};

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
