import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostId, getPostData } from "../../assets/js/helpers/getPosts";

export default function Post({ postData }) {
  console.log(postData);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div></div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
