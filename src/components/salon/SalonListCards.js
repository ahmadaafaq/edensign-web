
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { Grid, Box } from '@mui/material';
import "./style.css";
import SalonDetails from './SalonDetails';


const SalonListCards = () => {

    const salonsNames = ["#JAWED HABIB HAIR & BEAUTY", "#STUDIO11 SALON & SPA", "#SHAHNAZ HUSAIN", "#LAKMÉ SALON", "#LOOKS SALON", "#NATURALS"];
    const salonsImages = ["https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/c0e/c0ee4e9ff45dd92b3365c7685aa09416.webp", "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/680/680d3ee2eab94c6bb80496b3c884ca31.webp", "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/7c3/7c3d40a70b5aa33b344be9892a6b4c89.webp", "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/5b5/5b57e9b4bd7a629df354cfb210f4f590.webp", "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/138/138c98b08f39bad8792b69547907eb6e.webp", "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/c13/c134c9d42b8c406f4371648eae23392b.webp"]
    const rating = [4.5, 4, 4.5, 4.5, 4, 4.5];
    return (
        <>
        <Box sx={{ background: "linear-gradient(to right, #002244, #00563B)"}}>
        <Grid container spacing={4} sx={{ marginTop:"0px", margin: 'auto', padding:"20px", maxWidth:"86vw", backgroundColor:"#018749", justifyContent: "center", borderRadius:"32px"}}>
            {
                salonsNames.map((salon, index) => {
                    const img = salonsImages[index];
                    const ratings = rating[index];
                    return (
                  <Grid item xs={4} key={index}>
                    <Card className="salon-card" sx={{ maxWidth:310, height:400, boxShadow:"6px 6px 12px #00563B", borderRadius:'12px', transition: 'all .5s ease-in-out' }} >
                    <Chip label='FEATURED' sx={{float: "right", backgroundColor: '#002244', color: "white", fontWeight: "bold"}} />
                    <CardMedia
                    sx={{ height: 250 }}
                      image={img}
                      title={salon}
                      alt="Not Found"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {salon}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"> <Rating name="read-only" value={ratings} readOnly />  </Button>
                    <a href={salon} rel='noreferrer' style={{textDecoration: "none", paddingLeft:"30px"}}>
                        Know More
                    </a>
                    </CardActions>
                    </Card>
                  </Grid>
            )})}
          </Grid>
          <SalonDetails />
        </Box>
        </>
  )
}

export default SalonListCards;
