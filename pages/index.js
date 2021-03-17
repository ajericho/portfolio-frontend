import React from "react";
import { HeroContainer, RightHero, LeftHero } from "../components/modules/HomeHero.styles";
import FadeIn from "../components/elements/FadeIn.styles";
import Layout from "../components/templates/layout";
import Seo from "../components/seo";
import Image from "../components/elements/image";
import Social from "../components/modules/social";
import { fetchAPI } from "../lib/api";

import { GlobalStyle } from "../assets/css/GlobalSyles";

const Home = ({ articles, categories, homepage, experiences, pages }) => {
  return (

    <Layout pages={pages} >
      <Seo seo={homepage.seo} />
      <FadeIn>
        <HeroContainer >
        <LeftHero>
          <p>{homepage.hero.preHeader}</p>
          <h1><span>{homepage.hero.title}</span></h1>
          <h4>{homepage.hero.description}</h4>
          <Social />
          </LeftHero>
        <RightHero>

        <Image image={homepage.hero.coverImage} />

        </RightHero>
        </HeroContainer>
        </FadeIn>
    </Layout>


  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, experiences, pages, skills] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/experiences"),
    fetchAPI("/pages"),
    fetchAPI("/skills"),

  ]);

  return {
    props: { articles, categories, homepage, experiences, pages, skills },
    revalidate: 1,
  };
}

export default Home;