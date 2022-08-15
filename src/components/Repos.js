import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

  console.log(repos);

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        label: language,
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 7);

  const starsReiting = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 7);

  console.log(mostPopular, starsReiting);
  // let stars = repos.reduce((total, item) => {
  //   const { language, stargazers_count } = item;

  //   if (!language) return total;
  //   if (!total[language]) {
  //     total[language] = { label: language, value: 1 * item.stargazers_count };
  //   } else {
  //     total[language] = {
  //       label: language,
  //       value: total[language].value + 1,
  //       stars: total[language].value + stargazers_count,
  //     };
  //   }

  //   return total;
  // }, {});

  // stars = Object.values(stars)
  //   .sort((a, b) => {
  //     return b.stars - a.stars;
  //   })
  //   .slice(0, 7);
  // console.log(stars);

  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "13",
  //   },
  //   {
  //     label: "CSS",
  //     value: "23",
  //   },
  //   {
  //     label: "Java Script",
  //     value: "80",
  //   },
  // ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostPopular} />
        <div></div>
        <Doughnut2D data={starsReiting} />
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    hight: 100%
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {   
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
