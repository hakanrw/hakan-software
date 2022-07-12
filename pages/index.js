import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Head from 'next/head';
import Link from 'next/link';

import ShowcaseCard from '../components/ShowcaseCard';
import HakanCandarImage from "../assets/hakan-candar.jpeg";
import EnkaSchoolsImage from "../assets/enka-okullari.jpeg";
import SkillsImage from "../assets/skills.jpeg";
import StackImage from "../assets/stack.jpeg";
import { Fragment } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


export default function Home() {
  return (
    <Container>
      <Head>
        <title>hakan.software</title>
        <meta name="description" content="hi! i am hakan." />
        <meta property="og:image" content="/logo512.png"/>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5}>
          <Item>
            <Avatar src={HakanCandarImage.src} sx={{ width: "75%", height: "75%", mx: "auto", mb: 2 }} />
            <Typography variant="h5" sx={{mb: 1}}>hakan candar</Typography>
            <Typography>i am a technical high school graduate who loves programming.</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Item>
            <Typography variant="h5" sx={{mb: 2}}>about me</Typography>
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
              title="my skills"
              text={
                <Fragment>
                  i have been learning web development along with programming for more than three years. 
                  i have built many personal projects through this process which you can check {" "}
                  <Link href="projects"><Typography sx={{display: "inline", cursor: "pointer", fontWeight: 600}}>here</Typography></Link>.
                </Fragment>
              }
              sx={{ mb: 2 }}
              image={SkillsImage.src}
            />
            <ShowcaseCard 
              title="development stack"
              text={
                <Fragment>
                  i have experience in nextjs, react, express, postgres, mongodb and more. 
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
