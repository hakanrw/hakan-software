import { Fragment } from "react";

import PageContainer from "../../components/PageContainer";
import ShowcaseCard from "../../components/ShowcaseCard";

import FlamingoImage from "../../assets/projects/flamingo.png";
import FlintImage from "../../assets/projects/flint.png";
import QrbookImage from "../../assets/projects/qrbook.png";

import Head from 'next/head';

export default function Projects() {
  const style = {sx: {mb: 2}};

  return (
    <PageContainer title="my projects">
      <Head>
        <title>hakan.software | projects</title>
      </Head>
      <ShowcaseCard {...style} 
        title="flint" 
        text={
          <Fragment>
            social platforming application built with supabase and react. <br/> 
            you can follow people, like posts, and comment on people's content. <br/>
            explore the world and the people within.
          </Fragment>
        } 
        image={FlintImage.src}
        href="https://flint.candar.dev"
        big
      />
      <ShowcaseCard {...style}
        title="flamingo" 
        text={
          <Fragment>
            thought expression platform that makes extensive use of tags.  <br/>
            you can add multiple tags to a flame (post) and filter flames by category. <br/>
            built with svelte and firebase.
          </Fragment>
        } 
        image={FlamingoImage.src}
        href="https://flamingo.candar.dev"
        big
      />
      <ShowcaseCard {...style}
        title="qrbook" 
        text={
          <Fragment>
            in qrbook you generate pages with qr codes attached to them. <br/>
            these pages can contain any information that you want to share. <br />
            built with svelte and firebase.
          </Fragment>
        } 
        image={QrbookImage.src}
        href="https://qr.candar.dev/"
        big
      />
    </PageContainer>
  )
}
