
import { fetchAPI } from "../lib/api";
import Image from "../components/image";
import Experience from "../components/experience";
import Skill from "../components/skill";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MarkdownView from 'react-showdown';
import FadeIn from '../components/FadeIn.styles';

import { FlexContainer, PageContainer, PageRight, PageLeft, PageBody } from "../components/PageLayout.styles";


const SinglePage = ({ page, pages }) => {
  const seo = {
    metaTitle: page.title,
    metaDescription: `All ${page.title} articles`,
  };

  const markdown = page.content;

  return (
    <Layout pages={pages}>
      <Seo seo={seo} />

      <PageContainer className="uk-section">
      <h1><span>{page.title}</span></h1>
      <FadeIn> 
        <PageBody>


            <MarkdownView markdown={markdown} />
            <FlexContainer>   
            { page.experiences.length >= 1  ? 
                page.experiences.map(item => 
                    <Experience key={item.id} experience={item} /> 
                    ) 
                    : ''}   
             </FlexContainer>
            <FlexContainer>     
            { page.skills.length >= 1  ? 
                page.skills.map(item => 
                 <Skill key={item.id} skill={item} />
                    ) 
                    : ''}
             </FlexContainer>     

      </PageBody>

      </FadeIn>
      </PageContainer>

    </Layout>
  );
};

export async function getStaticPaths() {
  const pages = await fetchAPI("/pages");

  return {
    paths: pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = (await fetchAPI(`/pages?slug=${params.slug}`))[0];
  const pages = await fetchAPI("/pages");

  return {
    props: { page, pages },
    revalidate: 1,
  };
}

export default SinglePage;