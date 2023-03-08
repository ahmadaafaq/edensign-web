import React from 'react';
import Theme from '../../Theme';
import "./style.css"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Container, Typography, TextField, Button } from '@mui/material';

const BookAppointment = () => {
  return (
        <div style={{ paddingBottom:"50px", background: Theme.palette.background.greenBlueGradiant }}>
        <Container sx={{ 
            width: 620, height: 400, display:"flex", flexDirection:"column", justifyContent:"flex-start", color:"azure", background: Theme.palette.background.blueGreenGradiant, borderRadius:"16px" }}>
            <Typography component="h3" sx={{ pb:10, pl:6, pt:6,
                fontFamily: Theme.typography.h3.fontFamily, fontSize: Theme.typography.h3.fontSize}}> Book An Appointment </Typography> 
              <Container sx={{
                width: 550, height: 260, position:"relative"
              }}>
                <TextField id="filled-basic" sx={{ width: 250, mb:4, background: "hsl(0, 0%, 80%)"}} label="Your Name" variant="filled" /> <br />
                <TextField id="filled-basic" sx={{ width: 250, mb:4, background: "hsl(0, 0%, 80%)"}} label="Email Address" variant="filled" /> <br />
                <TextField id="filled-basic" sx={{ width: 250, mb:4, background: "hsl(0, 0%, 80%)"}} label="Mobile Number" variant="filled" /> <br />
                {/* <TextField id="datetime-local" sx={{position: 'absolute', top:"7vh", left:"55%", background: "hsl(0, 0%, 80%)" }} label="Pick a Date" type="datetime-local" variant="filled" defaultValue="2017-05-24" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar sx={{position: 'absolute', top:"-3vh", left:"48%" }} />
                </LocalizationProvider>
                <Button id='appointment-btn'> Submit </Button>
              </Container>
        </Container>
        </div>
  )
}

export default BookAppointment;