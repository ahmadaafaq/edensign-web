import * as React from 'react';
import { Box, Button, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


function ServicesLeftBar() {

    const [value, setValue] = React.useState([1, 100]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
      
    return (
        <Box sx={{width:"20vw", backgroundColor:'#E6E6FA', margin:"60px 0 0 60px", position:"absolute"}}>
            <h2 style={{textTransform:"uppercase", padding:"40px 0 0 40px", letterSpacing:"0.2rem"}}> product </h2>
            <h2 style={{textTransform:"uppercase", margin:"5px 0 10px 40px", letterSpacing:"0.2rem"}}> categories </h2>
            <Box>
            <List sx={{paddingLeft: "32px"}} component='nav'>
              <ListItem disablePadding sx={{marginBottom:"-15px"}}>
                <ListItemButton className="list">
                  <ListItemText primary="Fragrance" primaryTypographyProps={{fontSize: "1rem"}} />
                </ListItemButton>
              </ListItem>
                <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                  <ListItemText primary="Makeup" primaryTypographyProps={{fontSize: "1rem"}} />
                </ListItemButton>
                    <List sx={{pl:2}} component="div" disablePadding>
                        <ListItemButton sx={{marginBottom:"-15px"}} className="list" component="a" href="#simple-list">
                            <ListItemText primary="Eye Palettes" primaryTypographyProps={{fontSize: "1rem"}} />
                        </ListItemButton>
                        <ListItemButton  sx={{marginBottom:"-15px"}} className="list" component="a" href="#simple-list">
                            <ListItemText primary="Hair Health" primaryTypographyProps={{fontSize: "1rem"}} />
                        </ListItemButton>
                        <ListItemButton  sx={{marginBottom:"-10px"}} className="list" component="a" href="#simple-list">
                            <ListItemText primary="Lip Gloss" primaryTypographyProps={{fontSize: "1rem"}} />
                        </ListItemButton>
                    </List>
                <ListItemButton className="list">
                  <ListItemText primary="Skincare" primaryTypographyProps={{fontSize: "1rem"}} />
                </ListItemButton>
            </List>
            <Divider />
            </Box>
            <Box sx={{mt:3, width:"14vw", pl:6}}>
                <h2 style={{letterSpacing:"0.2rem"}}> PRICE </h2>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto" />
                <p style={{color: "grey"}}> Price: ${value[0]}-${value[1]} </p> <br />
                <Button sx={{border:"2px solid black", color:"black", padding:"10px 65px", letterSpacing:"0.2em"}}> FILTER </Button>
            </Box>
              <Divider sx={{marginTop:"30px"}} />
            <Box sx={{width:"20vw"}}>
                <h2 style={{textTransform:"uppercase", padding:"30px 0 0 40px", letterSpacing:"0.2rem"}}> color </h2>
                <List sx={{paddingLeft: "32px"}} component='nav'>
                <ListItem disablePadding sx={{marginBottom:"-10px"}}>
                  <ListItemButton className="list">
                    <RadioButtonUncheckedIcon style={{backgroundColor:"black", borderRadius:"50px", marginRight:"10px"}}/>
                    <ListItemText primary="Black" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </ListItem>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <RadioButtonUncheckedIcon style={{backgroundColor:"#C4A484", color:"#C4A484", borderRadius:"50px", marginRight:"10px"}}/>
                    <ListItemText primary="Light Brown" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-10px"}}>
                    <RadioButtonUncheckedIcon style={{backgroundColor:" #fc5a8d", color:" #fc5a8d", borderRadius:"50px", marginRight:"10px"}}/>
                    <ListItemText primary="Strawberry" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </List> <br />
            </Box>
            <Divider />
            <Box>
              <h2 style={{textTransform:"uppercase", padding:"20px 0 0 40px", letterSpacing:"0.2rem"}}> capacity </h2>
              <Button sx={{border:"2px solid #F8C8DC", color:"#000", margin:"20px 40px"}}> 30 mL </Button>
              <Button sx={{border:"2px solid #F8C8DC", color:"#000", marginLeft:"-20px"}}> 50 mL </Button> <br />
              <Button sx={{border:"2px solid #F8C8DC", color:"#000", margin:"0 0 30px 40px"}}> 100 mL </Button>
            </Box>
            <Divider />
            <Box>
              <h2 style={{textTransform:"uppercase", padding:"20px 0 0 40px", letterSpacing:"0.2rem"}}> brand </h2>
              <List sx={{paddingLeft: "32px"}} component='nav'>
                <ListItem disablePadding>
                  <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                    <Checkbox sx={{color: "lightgray"}}/>
                    <ListItemText primary="Aerin" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </ListItem>
                  <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                    <Checkbox sx={{color: "lightgray"}}/>
                    <ListItemText primary="Fable & Mane" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                    <Checkbox sx={{color: "lightgray"}} />
                    <ListItemText primary="Loreal" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                    <Checkbox sx={{color: "lightgray"}} />
                    <ListItemText primary="Mac" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                  <ListItemButton className="list" sx={{marginBottom:"-15px"}}>
                    <Checkbox sx={{color: "lightgray"}} />
                    <ListItemText primary="Schwarzkopf" primaryTypographyProps={{fontSize: "1rem"}} />
                  </ListItemButton>
                </List> <br />
            </Box>
        </Box>
    )
}

export default ServicesLeftBar;
