import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { GetStaticProps } from "next";

import { allPostsData } from "../assets/js/types/postData";
import { getAllPosts } from "../assets/js/helpers/getAllPosts";
import { sanitizeDate } from "../assets/js/helpers/sanitizeDate";

export default function Home({ allPostsData }: { allPostsData: allPostsData }) {
  const posts = sanitizeDate(allPostsData).contents;
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lists>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <Title>{post.title}</Title>
                  <Date>{post.date}</Date>
                </a>
              </Link>
            </div>
          );
        })}
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
