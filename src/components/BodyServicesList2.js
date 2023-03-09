import * as React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


function BodyServicesList2() {
    return (
          <Container maxWidth='xl' sx={{pt:12, display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"#F8C8DC", width: '100%'}}>
          <nav aria-label="services provided by this website">
            <List sx={{ display:"inline-flex" }}>
              <ListItem sx={{flexDirection:"column"}}>
                <SpaIcon />
                <ListItemButton className="list">
                  <ListItemText primary="all natural" primaryTypographyProps={{fontSize: "1.5rem"}} sx={{ textTransform: "uppercase"}} />
                </ListItemButton>
                  <Typography>
                    All the products that we manufacture are 99% natural and tested by lab technicians. Occasional mrs interested far expression.
                  </Typography>
              </ListItem>
              <ListItem sx={{flexDirection:"column"}}>
                <AutoAwesomeIcon /> 
                <ListItemButton className="list">
                  <ListItemText primary="TOP QUALITY" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
                <Typography>
                    We provide the best quality products at cheapest rates without mixing manmade ingredients.
                </Typography>
              </ListItem>
              <ListItem sx={{flexDirection:"column"}}>
                <CurrencyExchangeIcon />
                <ListItemButton className="list">
                  <ListItemText primary="10% CASHBACK" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
                <Typography>
                    We provide 10% cashback in all the beauty products listed on the site and money back guarantee if defect is there in any of our item.
                </Typography>
              </ListItem>
            </List>
          </nav>
          </Container>
    )
}

export default BodyServicesList2;
