import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post() {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div></div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {};
