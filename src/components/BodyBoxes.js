import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import MakeupLady from './makeup-lady-nobg.png';
import MakeupBrush from './makeup-brushes2.png';


function BodyBoxes() {
    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 16}}>
          <Grid item sx={{ marginTop: '-30px' }}>
            <Box
              sx={{
              width: 650,
              height: 500,
              backgroundColor: '#E6E6FA'
              }}
            >
              <img src={MakeupLady} id='makeup-img'/>
              <p id='makeup-para'> best of </p>
              <p id='makeup-heading'> skincare </p>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
              width: 699,
              height: 500,
              backgroundColor: '#E6E6FA'
              }}
              >
                <img src={MakeupBrush} id='makeup-img2' />
                <p id='makeup-para2'> top brands </p>
                <p id='makeup-heading2'> makeup </p>
            </Box>
          </Grid>
        </Grid>
    )
}

export default BodyBoxes;
