import Highlight from "react-highlight";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostId, getPostData } from "../assets/js/helpers/getPosts";

import styled from "styled-components";

export default function Post({ postData }) {
  postData.date = postData.date.slice(0, 10);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta property="og:title" content={postData.title} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css"
          rel="stylesheet"
        />
      </Head>
      <Article>
        <Title>{postData.title}</Title>
        <Date>{postData.date}</Date>
        <Body>
          <Highlight innerHTML={true}>{postData.body}</Highlight>
        </Body>
        <Footer />
      </Article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostId();
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `https://devtogami.microcms.io/api/v1/blog/
${slug}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`,
    { headers: { "X-API-KEY": process.env.apiKey || "" } }
  ).then((res) => res.json());
  return {
    props: {
      content,
    },
  };
};

const Article = styled.div`
  margin: 40px;
  font-size: 16px;
  line-height: 1.5;
  li {
    list-style: disc;
    list-style-position: inside;
  }
  h2 {
    margin-top: 40px;
    border-bottom: 1px solid white;
  }
  strong {
    color: #ffff00;
  }
  img {
    max-width: 920px;
  }

  a:visited {
    color: #ffa500;
  }
`;

const Body = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.main};
  font-size: 40px;
`;

const Date = styled.p`
  color: ${(props) => props.theme.color.main};
  font-size: 20px;
`;
