import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import _Link from 'next/link';
import { Fragment } from 'react';

export default function ShowcaseCard({ title, text, sx, image, big = false, href }) {
  const Link = href ? _Link : Fragment;  
  let props = {};
  if (href) props.href = href;

  return (
    <Link {...props}>
    <Card 
      style={{ textAlign: "left", cursor: href ? "pointer" : "default"}} 
      sx={[sx, href && {'&:hover': { opacity: 0.5}, 'transition': "0.2s"}]}
    >
      <Grid container>
        <Grid item xs={12} sm={big ? 8 : 12} md={big ? 10 : 8}>
          <Box sx={{ backgroundColor: 'background.default', height: "100%"}}>
            <CardContent>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {text}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={12} sm={big ? 4 : 12} md={big ? 2 : 4}>
          <CardMedia
            component="img"
            image={image}
            sx={{height: "100%", backgroundColor: 'background.default', aspectRatio: big ? "1 / 1" : undefined}}
            />
        </Grid>
      </Grid>
    </Card>
  </Link>
  );
}