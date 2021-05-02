import styled from "styled-components";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
export default function OSS({ cardDatas }) {
  return (
    <div>
      <h1>The list of PRs I made for OSS</h1>
      <PRList>
        {cardDatas.map((data, index) => (
          <LinkToPr key={index} href={data.url} target="_blank">
            <Image src={data.image} />
          </LinkToPr>
        ))}
      </PRList>
    </div>
  );
}

export const getServerSideProps = async () => {
  const githubUrl =
    "https://api.github.com/search/issues?q=is:pr+repo:aws-amplify/amplify-cli+author:togami2864";
  const pullRequests = await fetch(githubUrl, {
    method: "GET",
    headers: {
      Authorization: process.env.GITHUB_TOKEN,
    },
  }).then((res) => res.json());
  const pullRequestUrls = [];
  pullRequests.items.map((item) => {
    pullRequestUrls.push(item.html_url);
  });

  const temps = await Promise.all(
    pullRequestUrls.map(async (link: string) => {
      const metas = await fetch(link, {
        method: "GET",
        headers: {
          Authorization: process.env.GITHUB_TOKEN,
        },
      })
        .then((res) => res.text())
        .then((text) => {
          const metaData = {
            url: link,
            image: "",
          };
          const doms = new JSDOM(text);
          const metas = doms.window.document.getElementsByTagName("meta");

          for (let i = 0; i < metas.length; i++) {
            let pro = metas[i].getAttribute("property");
            if (pro === "og:image")
              metaData.image = metas[i].getAttribute("content");
          }
          return metaData;
        })
        .catch((e) => {
          console.error(e);
        });
      return metas;
    })
  );

  const cardDatas = temps.filter((temp) => temp !== undefined);

  return {
    props: {
      cardDatas,
    },
  };
};

const PRList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LinkToPr = styled.a`
  display: block;
  width: 400px;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
`;
