import { allPostsData } from "../types/postData";

export const sanitizeDate = (allPostsData: allPostsData) => {
  allPostsData.contents.forEach((post) => {
    post.date = post.date.slice(0, 10);
  });
  return allPostsData;
};
