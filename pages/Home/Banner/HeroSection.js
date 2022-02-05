import { Button, Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Hero from '../../../public/img/heroImg.PNG'
import Image from "next/image";
const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="hero">
     <Container >
      <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="hero-section" >
      <Grid  item xs={12} md={6}>
      <div className="hero-1">
         <h1>
         <span>Access 5700+</span><br/>
         Online yellow-shapeTutorial <br/> From Top Instructor.
         </h1>
         <p>Meet university,and cultural institutions,  who  <br/> share their experience.</p>
      
        <Button   onClick={() => router.push('/Home/Blog/MyCard')}>View all courses</Button>
    </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='hero-2'>
           <Image src={Hero} alt='img'/>
          
          </div>
        </Grid>
      
      </Grid>
    </Box>
 </Container>
    </div>
  );
}

export default HeroSection;