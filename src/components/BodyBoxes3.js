import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Face from './face.png';
import Eyes from './eyes.png';
import Lips from './lips.png';
import { Link } from 'react-router-dom';


function BodyBoxes3() {
    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 16}}>
          <Grid item sx={{marginTop:"20px"}}>
            <Box
              sx={{
              width: 446,
              height: 300
              }}
            >
              <Link to="/services"><img src={Face} className='body-boxes3-images' alt='This is a face'/></Link>
              <p style={{margin: "-185px 0 0 20px"}} className='body-boxes3-headings'> face </p>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
              width: 446,
              height: 300
              }}
              >
                <Link to="/services"><img src={Eyes} className='body-boxes3-images' alt='These are the eyes' /></Link>
                <p style={{margin: "-130px 0 0 95px"}} className='body-boxes3-headings'> eyes </p>
            </Box>
          </Grid>
          <Grid item sx={{marginTop:"-20px"}}>
            <Box
              sx={{
              width: 446,
              height: 300
              }}
              >
                <Link to="/services"><img src={Lips} className='body-boxes3-images' alt="These are the lips" /></Link>
                <p style={{margin:"-254px 0 0 104px"}} className='body-boxes3-headings'> lips </p>
            </Box>
          </Grid>
        </Grid>
    )
}

export default BodyBoxes3;


// https://images.unsplash.com/photo-1557296387-5358ad7997bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzc1MjN8MHwxfHNlYXJjaHw0fHxmYWNlfGVufDB8fHx8MTY3Mzc2Mzg2NA&ixlib=rb-4.0.3&q=80&w=1080

// https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzc1MjN8MHwxfHNlYXJjaHwxfHxleWVzfGVufDB8fHx8MTY3Mzc2NDA1Ng&ixlib=rb-4.0.3&q=80&w=1080

// https://images.unsplash.com/photo-1549153052-247abe00d6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzc1MjN8MHwxfHNlYXJjaHwxfHxsaXBzfGVufDB8fHx8MTY3Mzc2NDE2MA&ixlib=rb-4.0.3&q=80&w=1080
