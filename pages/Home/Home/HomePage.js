import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Footer from '../Footer/Footer';
import Popular from '../AllCourses/Popular';
import HeroSection from '../Banner/HeroSection';
import Navbar from '../Navbar/Navbar';
import Example from '../../Framer/Example'
import Nested from '../NestedRouted/Nested';
import Courses from '../Courses';

const HomePage = () => {
  return (
    <>
  <Example/>
  <Navbar/>
  <HeroSection/>
  <Container >
  <Popular/>

  <Typography variant='h3' sx={{textAlign:"center", mt:10, mb:4}}>Our Blogs</Typography>
     <Grid container spacing={5} sx={{mb:5}} >
 
  <Grid item xs={12} sm={6} md={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  <Grid item xs={12} sm={6} md={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="https://images.unsplash.com/photo-1580309142073-ba605ab6d768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  <Grid item xs={12} sm={6} md={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
</Grid>
<Nested/>
</Container>
<Footer/>
    </>
  );
}

export default HomePage;