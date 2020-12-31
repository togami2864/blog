import { allPostsData, postData } from "../types/postData";

export const getAllPosts = async () => {
  const allPosts: allPostsData = await fetch(
    "https://devtogami.microcms.io/api/v1/blog",
    {
      headers: {
        "X-API-KEY": process.env.microCMS,
      },
    }
  ).then((res) => res.json());
  return allPosts;
};

export const getPostId = async () => {
  const posts: allPostsData = await fetch(
    "https://devtogami.microcms.io/api/v1/blog",
    {
      headers: {
        "X-API-KEY": process.env.microCMS,
      },
    }
  ).then((res) => res.json());
  return posts.contents.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const posts: allPostsData = await fetch(
    "https://devtogami.microcms.io/api/v1/blog",
    {
      headers: {
        "X-API-KEY": process.env.microCMS,
      },
    }
  ).then((res) => res.json());
  const post: postData = posts.contents.filter(
    (content) => content.id === id
  )[0];
  return post;
};
