import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Head from 'next/head';
import Link from 'next/link';

import ShowcaseCard from '../components/ShowcaseCard';
import HakanCandarImage from "../assets/hakan.jpg";
import EnkaSchoolsImage from "../assets/enka-okullari.jpeg";
import YeditepeImage from "../assets/yeditepe.jpeg";
import SkillsImage from "../assets/skills.jpeg";
import StackImage from "../assets/stack.jpeg";
import { Fragment } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

import { css } from '@emotion/css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


export default function Home() {
  const social = [
    ["github", "https://github.com/hakanrw", GitHubIcon],
    ["linkedin", "https://www.linkedin.com/in/hakan-candar/", LinkedInIcon],
    ["e-mail", "mailto:hakancandar@protonmail.com", MailIcon],
  ];

  return (
    <Container sx={{mb: 3}}>
      <Head>
        <title>hakan.candar.dev</title>
        <meta name="description" content="hi! i am hakan." />
        <meta property="og:image" content="/logo512.png"/>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5}>
          <Item>
            <Avatar src={HakanCandarImage.src} sx={{ width: "75%", height: "auto", mx: "auto", mb: 2, aspectRatio: "1 / 1" }} />
            <Typography variant="h5" sx={{mb: 1}}>hakan candar</Typography>
            <Typography>i am a computer science student at yeditepe uni who loves programming.</Typography>
            {
              social.map(s => {
                const Icon = s[2];
                return (
                  <a key={s[0]} href={s[1]} style={{textDecoration: "none", color: "white", fontWeight: 600}}>
                    <div 
                    className={css`
                      display: flex;
                      align-items: center;
                      flex-wrap: wrap;
                      margin-top: 15px;
                      justify-content: center;
                      `} 
                    >
                      <Icon fontSize="medium"/><span className={css`margin-left: 4px; font-size: 110%`}> {s[0]}</span>
                  </div>
                  </a>
                );
              })
            }
          </Item>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Item>
            <Typography variant="h5" sx={{mb: 2}}>about me</Typography>
            <ShowcaseCard 
              title="my skills and projects"
              text={
                <Fragment>
                  i have been learning web development along with programming for more than four years. 
                  i have built many personal projects through this process which you can check {" "}
                  <Link href="projects"><Typography sx={{display: "inline", cursor: "pointer", fontWeight: 600}}>here</Typography></Link>.
                </Fragment>
              }
              sx={{ mb: 2 }}
              image={SkillsImage.src}
            />
            <ShowcaseCard 
              title="where i'm studying"
              text={
                <Fragment>
                  i am currently studying at yeditepe university as a computer science student.
                  i was able to combine my previous programming experience with those i learnt in university.
                  i love my classes.
                </Fragment>
              }
              sx={{ mb: 2 }}
              image={YeditepeImage.src}
            />
            <ShowcaseCard 
              title="where i graduated"
              text={
                <Fragment>
                  i graduated from private enka technical high school. my school equipped me with great knowledge surrounding 
                  the topics of science, maths, industrial automation, computer programming and more.
                </Fragment>
              }
              sx={{ mb: 2 }}
              image={EnkaSchoolsImage.src}
            />
            <ShowcaseCard 
              title="development stack"
              text={
                <Fragment>
                  i have experience in svelte, nextjs, react, express, postgres, mongodb and more. 
                  tell me about what you use in your company! i am interested. 
                </Fragment>
              }
              image={StackImage.src}
            />
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}
