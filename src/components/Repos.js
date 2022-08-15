import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";

const Repos = () => {
  const { repos } = React.useContext(GithubContext);

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

  let { stars, forks } = repos.reduce(
    (total, item, index) => {
      const { stargazers_count, name, forks } = item;
      total.stars[`${stargazers_count}+${index.toString()}`] = {
        label: name,
        value: stargazers_count,
      };

      total.forks[`${forks}+${index.toString()}`] = {
        label: name,
        value: forks,
      };
      return total;
    },
    { stars: {}, forks: {} }
  );

  const reposStarsMAX = Object.values(stars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const reposForksMAX = Object.values(forks)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostPopular} />
        <Column3D data={reposStarsMAX} />
        <Doughnut2D data={starsReiting} />
        <Bar3D data={reposForksMAX} />
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
