import * as React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MessageIcon from '@mui/icons-material/Message';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';


function BodyServicesList() {
    return (
          <Container maxWidth='xl' sx={{pt:10, display:'flex', justifyContent:"center", alignItems:"center", backgroundColor:"#F8C8DC", width: '100%'}}>
          <nav aria-label="services provided by this website">
            <List sx={{ display:"inline-flex" }}>
              <ListItem sx={{flexDirection:"column"}}>
                <LocalShippingIcon />
                <ListItemButton className="list">
                  <ListItemText primary="free shipping" primaryTypographyProps={{fontSize: "1.5rem"}} sx={{ textTransform: "uppercase"}} />
                </ListItemButton>
                  <Typography>
                    For county now sister engage had season better had waited. Occasional mrs interested far expression.
                  </Typography>
              </ListItem>
              <ListItem sx={{flexDirection:"column"}}>
                <MessageIcon />
                <CommentIcon sx={{margin: "-10px 10px 10px 60px"}} />
                <ListItemButton className="list">
                  <ListItemText primary="24/7 SUPPORT" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
                <Typography>
                    Our team members work for 24/7 to provide you the best experience with most simplicity.
                </Typography>
              </ListItem>
              <ListItem sx={{flexDirection:"column"}}>
                <SettingsBackupRestoreIcon />
                <ListItemButton className="list">
                  <ListItemText primary="MONEY BACK" primaryTypographyProps={{fontSize: "1.5rem"}} />
                </ListItemButton>
                <Typography>
                    We provide 100% money back guarantee within 2 days of purchase if defect is there in any of our item.
                </Typography>
              </ListItem>
            </List>
          </nav>
          </Container>
    )
}

export default BodyServicesList;
