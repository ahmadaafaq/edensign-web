import * as React from 'react';
import Container from '@mui/material/Container';
import { Button, Grid, Box, TextField, Typography } from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Subscribe from './subscribe.png';


function BodyNewsletter() {
    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 16, justifyContent:"center"}}>
          <Grid item>
            <Container
              sx={{
              width: 600,
              height: 400,
              backgroundColor: '#E6E6FA'
              }}
            >
              <p className='about-para1' style={{marginLeft: "210px", paddingTop:"40px"}}> subscribe </p>
              <p className='about-para1' style={{marginLeft: "210px"}}> to our </p>
              <p className='about-para1' style={{marginLeft: "210px"}}> newsletter </p>
              <MarkEmailReadIcon sx={{fontSize: "200px", margin: "-160px 10px 10px 10px"}} />  
              <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
              <Typography component="h6" sx={{color:"grey"}}> Get latest news, offers and discounts.</Typography>
              <TextField id="filled-basic" label="Your Email" variant="filled" />
              <Button sx={{background:'transparent', color:"#000", border:"1px solid black", marginTop:"10px"}}> subscribe </Button>
              </Box>
            </Container>
          </Grid>
          <Grid item>
            <Box
              sx={{
              width: 500,
              height: 400,
              borderRight: "3px solid #E6E6FA"
              }}
              >
                <img src={Subscribe} className='newsletter-image' alt='This is the an image' />
            </Box>
          </Grid>
        </Grid>
    )
}

export default BodyNewsletter;
