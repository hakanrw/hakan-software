import { Fragment } from "react";

import PageContainer from "../../components/PageContainer";
import ShowcaseCard from "../../components/ShowcaseCard";

import AcisozlukImage from "../../assets/projects/aci-sozluk.png";
import FlintImage from "../../assets/projects/flint.png";
import ShortenxpressImage from "../../assets/projects/shortenxpress.png";

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
            explore the world and the people within.
          </Fragment>
        } 
        image={FlintImage.src}
        href="https://flint-app.netlify.app"
        big
      />
      <ShowcaseCard {...style}
        title="acı sözlük" 
        text={
          <Fragment>
            social dictionary application inspired from turkish website ekşi sözlük.
            built with react, mongo and express. <br/>
            write to your heart's content.
          </Fragment>
        } 
        image={AcisozlukImage.src}
        href="https://www.acisozluk.tk"
        big
      />
      <ShowcaseCard {...style}
        title="shortenxpress" 
        text={
          <Fragment>
            url-shortener application built using the MVC approach. used jade and express.<br/>
            shorten links and share.
          </Fragment>
        } 
        image={ShortenxpressImage.src}
        href="https://shortenxpress.herokuapp.com/"
        big
      />
    </PageContainer>
  )
}