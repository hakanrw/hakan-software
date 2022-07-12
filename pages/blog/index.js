import Typography from '@mui/material/Typography';
import PageContainer from '../../components/PageContainer';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';

import Head from 'next/head';

export default function Blog() {
  return (
    <PageContainer title="my blog">
      <Head>
        <title>hakan.software | blog</title>
      </Head>
      <EventRepeatIcon sx={{my: 4, width: "8em", height: "8em", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
      <Typography variant="h5" sx={{textAlign: "center", mb: 2}}>Coming soon!</Typography>
    </PageContainer>
  );
}