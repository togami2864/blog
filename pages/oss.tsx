import styled from "styled-components";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

interface metaData {
  link: string;
  number: number;
  title: string;
  image: string;
}

export default function OSS({ cardDatas }) {
  return (
    <div>
      <h1>The list of PRs I made for OSS</h1>
      <PRList>
        {cardDatas.map((data, index) => (
          <LinkToPr key={index} href={data.url} target="_blank">
            <PrTitle>{`・#${data.number}:${data.title}`}</PrTitle>
            <Image src={data.image} />
          </LinkToPr>
        ))}
      </PRList>
    </div>
  );
}

export const getStaticProps = async () => {
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
    pullRequestUrls.push({
      link: item.html_url,
      number: item.number,
      title: item.title,
    });
  });

  const temps = await Promise.all(
    pullRequestUrls.map(async (item: metaData) => {
      const metas = await fetch(item.link, {
        method: "GET",
        headers: {
          Authorization: process.env.GITHUB_TOKEN,
        },
      })
        .then((res) => res.text())
        .then((text) => {
          const metaData = {
            url: item.link,
            number: item.number,
            title: item.title,
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
  a {
    color: white;
  }
  a:visited {
    color: yellow;
  }
`;

const LinkToPr = styled.a`
  display: block;
  width: 400px;
  margin: 20px;
`;
const PrTitle = styled.p`
  display: block;
`;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
`;
