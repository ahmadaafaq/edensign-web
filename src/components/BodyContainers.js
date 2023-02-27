import * as React from 'react';
import { Button, Container, Grid } from '@mui/material';
import MakeupBrush from './makeup-brush3-nobg.png';
import DiamondIcon from '@mui/icons-material/Diamond';


function BodyContainers() {
    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 14}}>
          <Grid item>
            <Container
              sx={{
              margin: '0 0 10px 180px',
              width: 460,
              height: 500,
              backgroundColor: '#E6E6FA'
              }}
            >
              <img src={MakeupBrush} id='makeup-img3'/>
            </Container>
          </Grid>
          <Grid item>
            <Container
              sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 480,
              height: 520,
              backgroundColor: '#E6E6FA'
              }}
              >
                <p id='makeup-para3'> new collection </p>
                <DiamondIcon />
                <p className='makeup-heading3'> lavender </p>
                <p className='makeup-heading3'> queen </p>
                <p className='makeup-para4'> Hello there, this is the brand new product of the company that will make you go like a lavender queen. Hope you enjoy the day and keep purchasing the latest trends from our company to become fashion icon. </p>
                <p className='makeup-para4'> Hello there, this is the brand new product of the company that will make you go like a lavender queen. Hope you enjoy the day and keep purchasing the latest trends from our company to become fashion icon. </p>
                <Button sx={{backgroundColor:'black', color:'white', marginTop:"10px"}}> Read More </Button>
            </Container>
          </Grid>
        </Grid>
    )
}

export default BodyContainers;
