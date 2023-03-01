import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    return (
        <Box sx={{backgroundColor:"#F8C8DC", paddingTop:"50px"}}>
            <Box className="footer-box">
              <List component='nav' sx={{ display:"inline-flex", color:"white", alignItems:"flex-start"}}>
                  <ListItemButton className="list">
                    <ListItemText primary="ABOUT US" sx={{marginRight:"30px"}} primaryTypographyProps={{fontSize: "1rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="OUR TEAM" sx={{marginRight:"30px"}} primaryTypographyProps={{fontSize: "1rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="FAQ" sx={{marginRight:"30px"}} primaryTypographyProps={{fontSize: "1rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="MAINTENANCE MODE" sx={{marginRight:"30px"}} primaryTypographyProps={{fontSize: "1rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="CONTACT" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
              </List> <br />
            <Box sx={{position:"absolute", left:"50px", paddingTop:"8%", color:"white"}}>
              <List sx={{paddingLeft: "32px"}} component='nav'>
                <ListItem disablePadding>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <CallIcon sx={{fontSize:"12px", marginRight:"10px"}} />
                    <ListItemText primary="123 488 6532" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </ListItem>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <PlaceIcon sx={{fontSize:"12px", marginRight:"10px"}} />
                    <ListItemText primary="25 West 21th Street, Miami Fl, USA" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <MailIcon sx={{fontSize:"12px", marginRight:"10px"}} />
                    <ListItemText primary="info@edensign.com" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <ScheduleIcon sx={{fontSize:"12px", marginRight:"10px"}} />
                    <ListItemText primary="Mon-Fri: 10:00-18:00" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </List> <br />
            </Box>
            <Box sx={{position:"absolute", paddingTop:"8%", color:"white"}}>
              <p style={{textTransform:"uppercase", padding:"20px 0 0 40px", letterSpacing:"0.4rem", fontSize:"42px"}}> edensign </p>
              <List sx={{paddingLeft: "32px", display:"inline-flex"}} component='nav'>
                  <ListItemButton className="list">
                    <FacebookIcon sx={{fontSize:"20px", marginRight:"10px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <InstagramIcon sx={{fontSize:"20px", marginRight:"10px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <TwitterIcon sx={{fontSize:"20px", marginRight:"10px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <YouTubeIcon sx={{fontSize:"20px", marginRight:"10px"}} />
                  </ListItemButton>
                </List>
            </Box>
            <Box sx={{position:"absolute", right:"50px", paddingTop:"8%", color:"white"}}>
              <p> Hello there, this is the brand new product<br /> of the company that will make you go<br /> like a lavender queen. Hope you enjoy<br /> the day and keep purchasing the latest<br /> trends from our company to become...<br /><kbd style={{float:"right"}}>READ MORE</kbd> </p>
            </Box>
            <Box sx={{width:"90vw", position:"absolute", left:"7%", paddingTop:"22%", fontSize:"14px"}}>
              <p style={{color:"#FFFDD0"}}> @ 2023 EDENSIGN Theme. All Rights Reserved. </p>
              <List sx={{display:"inline-flex", position:"absolute", left:"72%",  bottom:"-6%", color:"grey"}} component='nav'>
                  <ListItemButton className="list">
                    <ListItemText primary="PRIVACY POLICY" sx={{marginRight:"20px"}} primaryTypographyProps={{fontSize: "0.8rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="TERMS" sx={{marginRight:"20px"}} primaryTypographyProps={{fontSize: "0.8rem"}} />
                    <FiberManualRecordIcon sx={{fontSize:"8px"}} />
                  </ListItemButton>
                  <ListItemButton className="list">
                    <ListItemText primary="FAQ" primaryTypographyProps={{fontSize: "0.8rem"}} />
                  </ListItemButton>
                </List>
            </Box>
            </Box>
        </Box>
    )
}

export default Footer;