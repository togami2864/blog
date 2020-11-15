import { postIndex } from "../types/postData";

export const getAllPosts = async () => {
  const allPosts: postIndex = await fetch(
    "https://devtogami.microcms.io/api/v1/title",
    {
      headers: {
        "X-API-KEY": process.env.microCMS,
      },
    }
  ).then((res) => res.json());
  return allPosts;
};
