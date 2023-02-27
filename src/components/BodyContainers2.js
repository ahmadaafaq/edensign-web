import * as React from 'react';
import { Button, Container, Grid } from '@mui/material';
import Lady from './lady2-nobg.png';
import DiamondIcon from '@mui/icons-material/Diamond';


function BodyContainers2() {
    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 14}}>
          <Grid item>
            <Container
              sx={{
                margin: '10px 0 10px 180px',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 480,
                height: 520,
                backgroundColor: '#E6E6FA'
            }}
            >
              <p className='about-para1'> about </p>
              <DiamondIcon />
              <p className='about-para2'> our shop </p>
              <p className='about-para3'> Hello there, this is the brand new product of the company that will make you go like a lavender queen. Hope you enjoy the day and keep purchasing the latest trends from our company to become fashion icon. </p>
              <p className='about-para3'> Hello there, this is the brand new product of the company that will make you go like a lavender queen. Hope you enjoy the day and keep purchasing the latest trends from our company to become fashion icon. </p>
              <Button sx={{backgroundColor:'black', color:'white', marginTop:"10px"}}> Read More </Button>
            </Container>
          </Grid>
          <Grid item>
            <Container
              sx={{
                margin: '50px 0 10px 0',
                width: 460,
                height: 520,
                backgroundColor: '#E6E6FA'
              }}
              >
                <img src={Lady} id='about-img'/>
            </Container>
          </Grid>
        </Grid>
    )
}

export default BodyContainers2;
