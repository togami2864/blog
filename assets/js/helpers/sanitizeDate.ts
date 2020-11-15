import { allPostsData } from "../types/postData";

export const sanitizeDate = (allPostsData: allPostsData) => {
  allPostsData.contents.forEach((post) => {
    const index = post.date.indexOf("T");
    post.date = post.date.slice(0, index);
  });
  return allPostsData;
};
